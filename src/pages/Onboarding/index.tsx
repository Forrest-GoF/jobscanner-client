import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as S from './styled';
import { DutySelectModal, TechTagSelectModal} from '@/components';
import { modalState, MODAL_STATE } from '@/stores/common';
import { memberState } from '@/stores/member';
import { updateMember } from '@/apis/member';
import { RESPONSE_SUCCESS_CREATED } from '@/constants/api';
import { MascotFull } from '@/assets/images/icons';

const Onboarding = () => {
	const navigator = useNavigate();

	const [modal, setModal] = useRecoilState(modalState);
	const member = useRecoilValue(memberState);

	const onOnboardingInfomationSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const { data, status } = await updateMember({
			nickname: member.nickname,
			imageUrl: member.imageUrl,
			duties: member.duties,
			tags: member.tags,
			promotionAgreement: member.promotionAgreement,
		});

		if (status === RESPONSE_SUCCESS_CREATED) {
			navigator('/');
		}
	};

	return (
		<S.Container>
			<S.FormContainer onSubmit={onOnboardingInfomationSubmit}>
				<S.DescriptionWrapper>
					<h2>{member.nickname}님을 위한 맞춤 공고를 받아보세요 !</h2>
					<p>
						아래의 추가 정보를 입력하고
						<br />
						오늘의 맞춤 공고 및 알림 서비스를 만나보세요.
					</p>
				</S.DescriptionWrapper>

				<S.InputContainer>
					<S.InputTitle>희망직무</S.InputTitle>

					<S.SelectItemWrapper onClick={() => setModal(MODAL_STATE.openDutySelect)}>
						{member.duties.length ? (
							member.duties.map((duty, idx) => {
								return <S.SelectedItem key={`${duty}-${idx}`}>{duty}</S.SelectedItem>;
							})
						) : (
							<S.SelectItemPlaceholder>희망직무를 선택해 주세요. (최대 3개)</S.SelectItemPlaceholder>
						)}
					</S.SelectItemWrapper>

					{modal === MODAL_STATE.openDutySelect && (
						<DutySelectModal onCloseModal={() => setModal(MODAL_STATE.closeModal)} />
					)}
				</S.InputContainer>

				<S.InputContainer>
					<S.InputTitle>주요기술</S.InputTitle>

					<S.SelectItemWrapper onClick={() => setModal(MODAL_STATE.openTeckTagSelect)}>
						{member.tags.length ? (
							member.tags.map((tag, idx) => {
								return <S.SelectedItem key={`${tag}-${idx}`}>{tag}</S.SelectedItem>;
							})
						) : (
							<S.SelectItemPlaceholder>주요기술을 선택해 주세요. (최대 3개)</S.SelectItemPlaceholder>
						)}
					</S.SelectItemWrapper>

					{modal === MODAL_STATE.openTeckTagSelect && (
						<TechTagSelectModal onCloseModal={() => setModal(MODAL_STATE.closeModal)} />
					)}
				</S.InputContainer>

				<S.ButtonWrapper>
					<S.Button type="button" buttonType="normal" padding="1em" onClick={() => navigator('/')}>
						다음에 하기
					</S.Button>
					<S.Button type="submit" buttonType="primary" padding="1em">
						저장하기
					</S.Button>
				</S.ButtonWrapper>
			</S.FormContainer>

			<S.Underlay>
				<img src={MascotFull} alt="백그라운드" />
			</S.Underlay>
		</S.Container>
	);
};

export default Onboarding;
