import { useRecoilState } from 'recoil';
import { TechTagInput, ModalFrame } from '@/components';
import * as S from './styled';
import { memberState } from '@/stores/member';
import { CloseIcon } from '@/assets/images/icons';

type Props = {
	onCloseModal: () => void;
};

const TechTagSelectModal = (props: Props) => {
	const [member, setMember] = useRecoilState(memberState);

	const onTechTagsUpdate = (selectedTag: string) => {
		if (!member.tags.includes(selectedTag)) {
			setMember({ ...member, tags: [...member.tags, selectedTag] });
		}
	};

	const onDeleteSelectedTag = (targetTag: string) => {
		setMember({ ...member, tags: [...member.tags.filter((tag) => tag !== targetTag)] });
	};

	const onTechTagModalDispatchButtonClick = () => {
		props.onCloseModal();
	};

	return (
		<ModalFrame>
			<S.Container>
				<S.ModalTopWrapper>
					<S.Title>주요기술</S.Title>
					<button type="button" onClick={props.onCloseModal}>
						<img src={CloseIcon} alt="" />
					</button>
				</S.ModalTopWrapper>

				<S.TechTagInputWrapper>
					<TechTagInput
						placeholder="보유 기술을 입력해 주세요. (최대 3개)"
						autoCompleteEmptyMessage={
							<span>
								검색어로 시작하는 결과가 존재하지 않습니다.
								<br />
								한글로 입력했다면 영어로 입력 해보세요.
							</span>
						}
						isDisabled={member.tags.length >= 3}
						onAutoCompleteItemClick={onTechTagsUpdate}
					/>
				</S.TechTagInputWrapper>

				<S.Title>선택한 기술</S.Title>
				<S.SelectedItemWrapper>
					{member.tags.length !== 0 ? (
						member.tags.map((tag, idx) => (
							<S.SelectedItem key={`${tag}-${idx}`}>
								{tag}
								<button type="button" onClick={() => onDeleteSelectedTag(tag)}>
									<img src={CloseIcon} alt="" />
								</button>
							</S.SelectedItem>
						))
					) : (
						<S.SelectedItemEmpty>선택된 직무가 없습니다.</S.SelectedItemEmpty>
					)}
				</S.SelectedItemWrapper>

				<S.ModalButtonWrapper>
					<S.ModalDispatchButton type="button" onClick={onTechTagModalDispatchButtonClick}>
						저장
					</S.ModalDispatchButton>
				</S.ModalButtonWrapper>
			</S.Container>
		</ModalFrame>
	);
};

export default TechTagSelectModal;
