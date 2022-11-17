import { useRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { ModalFrame } from '@/components';
import * as S from './styled';
import { memberState } from '@/stores/member';
import { getDuties } from '@/apis/duty';
import { CloseIcon } from '@/assets/images/icons';

type Props = {
	onCloseModal: () => void;
};

const DutySelectModal = (props: Props) => {
	const [member, setMember] = useRecoilState(memberState);

	const { data: duties } = useQuery(['getDuties'], () => getDuties());

	const onDutySelectClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value: selectedDuty } = event.currentTarget;

		if (!member.duties.includes(selectedDuty)) {
			setMember({ ...member, duties: [...member.duties, selectedDuty] });
		} else {
			setMember({ ...member, duties: [...member.duties.filter((duty) => duty !== selectedDuty)] });
		}
	};

	const onDeleteSelectedDuty = (targetDuty: string) => {
		setMember({ ...member, duties: [...member.duties.filter((duty) => duty !== targetDuty)] });
	};

	const onDutyModalDispatchButtonClick = () => {
		props.onCloseModal();
	};

	return (
		<ModalFrame>
			<S.Container>
				<S.ModalTopWrapper>
					<S.Title>희망직무</S.Title>
					<button type="button" onClick={props.onCloseModal}>
						<img src={CloseIcon} alt="" />
					</button>
				</S.ModalTopWrapper>

				<S.DutySelectWrapper>
					{duties?.map((duty, idx) => (
						<S.DutySelect key={`${duty}-${idx}`}>
							<input
								id={`${duty}`}
								type="checkbox"
								value={duty}
								checked={member.duties.includes(duty)}
								disabled={member.duties.length >= 3 && !member.duties.includes(duty)}
								onChange={onDutySelectClick}
							/>
							<label htmlFor={`${duty}`}>{duty}</label>
						</S.DutySelect>
					))}
				</S.DutySelectWrapper>

				<S.Title>선택한 직무</S.Title>
				<S.SelectedItemWrapper>
					{member.duties.length !== 0 ? (
						member.duties.map((duty, idx) => (
							<S.SelectedItem key={`${duty}-${idx}`}>
								{duty}
								<button type="button" onClick={() => onDeleteSelectedDuty(duty)}>
									<img src={CloseIcon} alt="" />
								</button>
							</S.SelectedItem>
						))
					) : (
						<S.SelectedItemEmpty>선택된 직무가 없습니다.</S.SelectedItemEmpty>
					)}
				</S.SelectedItemWrapper>

				<S.ModalButtonWrapper>
					<S.ModalDispatchButton type="button" onClick={onDutyModalDispatchButtonClick}>
						저장
					</S.ModalDispatchButton>
				</S.ModalButtonWrapper>
			</S.Container>
		</ModalFrame>
	);
};

export default DutySelectModal;
