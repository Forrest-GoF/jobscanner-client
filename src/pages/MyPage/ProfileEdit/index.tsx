import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { Avatar, Button,TechTagSelectModal,DutySelectModal } from '@/components';
import * as S from './styled';
import { memberState } from '@/stores/member';
import { modalState, MODAL_STATE } from '@/stores/common';
import { updateMember } from '@/apis/member';
import { Member } from '@/types/apis/auth';
import { RESPONSE_SUCCESS_CREATED } from '@/constants/api';
import { CameraIcon, ProfileDefaultIcon } from '@/assets/images/icons';

const ProfileEdit = () => {
	const [member, setMember] = useRecoilState<Member>(memberState);
	const [modal, setModal] = useRecoilState(modalState);
	const profileImageEditInputRef = useRef<HTMLInputElement>(null);

	const {
		register,
		watch,
		setValue,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm({
		defaultValues: {
			nickname: member.nickname,
			email: member.email,
			imageUrl: member?.imageUrl,
			tags: member?.tags,
			duties: member?.duties,
		},
	});

	const onProfileImageEditButtonClick = () => {
		if (profileImageEditInputRef.current) {
			profileImageEditInputRef.current.click();
		}
	};

	const onProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!(event.target instanceof HTMLInputElement)) return;
		if (!event.target.files || !event.target.files[0]) return;

		const reader = new FileReader();
		reader.onloadend = () => {
			if (reader.readyState === 2) {
				if (!reader.result) return;
				setMember({ ...member, imageUrl: reader.result as string });
			}
		};
		reader.readAsDataURL(event.target.files[0]);
	};

	const onMyProfileEditInfomationSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const { data, status } = await updateMember({
			nickname: member.nickname,
			imageUrl: member.imageUrl,
			duties: member.duties,
			tags: member.tags,
			promotionAgreement: member.promotionAgreement,
		});

		if (status === RESPONSE_SUCCESS_CREATED) {
			setMember({ ...data.data });
			alert('????????? ????????? ???????????? ???????????????.');
		}
	};

	// useEffect(() => {
	// 	setValue('nickname', member.nickname);
	// 	setValue('email', member.email);
	// 	setValue('imageUrl', member.imageUrl);
	// 	setValue('duties', member.duties);
	// 	setValue('tags', member.tags);
	// }, [member, watch('imageUrl')]);

	return (
		<S.Container onSubmit={onMyProfileEditInfomationSubmit}>
			<S.Title>?????? ??????</S.Title>
			<S.Wrapper>
				<S.MemberInfoWrapper>
					<S.FormMemberInputGroup>
						<S.FormOptionalLabel htmlFor="profileImage">????????? ?????????</S.FormOptionalLabel>
						<S.ProfileEditWrapper type="button" onClick={onProfileImageEditButtonClick}>
							<Avatar size="100%" imgSrc={member.imageUrl ?? ProfileDefaultIcon} />
							<span>
								<img src={CameraIcon} alt="" />
							</span>
						</S.ProfileEditWrapper>
						<S.FormInput
							id="imageUrl"
							type="file"
							accept="image/png, image/jpg, image/jpeg"
							style={{ display: 'none ' }}
							{...register('imageUrl', {
								onChange: onProfileImageChange,
							})}
							ref={profileImageEditInputRef}
						/>
					</S.FormMemberInputGroup>

					<S.FormMemberInputGroup>
						<S.FormRequiredLabel htmlFor="nickname">?????????</S.FormRequiredLabel>
						<S.FormInput id="nickname" type="text" {...register('nickname', {})} />
					</S.FormMemberInputGroup>

					<S.FormMemberInputGroup>
						<S.FormRequiredLabel htmlFor="email">?????????</S.FormRequiredLabel>
						<S.FormInput id="email" type="email" {...register('email', {})} />
					</S.FormMemberInputGroup>
				</S.MemberInfoWrapper>
			</S.Wrapper>

			<S.Title>?????? ?????? ??? ?????? ??????</S.Title>
			<S.Wrapper>
				<S.OnBoardingInfoWrapper>
					<S.FormOnBoardingInputGroup>
						<div>
							<S.FormSelectLimitLabel>?????? ??????</S.FormSelectLimitLabel>
							<S.SelectedWrapper>
								{member.duties.length > 0 ? (
									member.duties.map((duty, index) => <S.SelectedItem key={`${duty}-${index}`}>{duty}</S.SelectedItem>)
								) : (
									<S.InformationDesc>????????? ?????? ????????? ????????????. ?????? ????????? ???????????????.</S.InformationDesc>
								)}
							</S.SelectedWrapper>
						</div>
						<div>
							<button type="button" onClick={() => setModal(MODAL_STATE.openDutySelect)}>
								?????? ?????? ??????
							</button>
						</div>
						{modal === MODAL_STATE.openDutySelect && (
							<DutySelectModal onCloseModal={() => setModal(MODAL_STATE.closeModal)} />
						)}
					</S.FormOnBoardingInputGroup>
					<S.FormOnBoardingInputGroup>
						<div>
							<S.FormSelectLimitLabel>?????? ??????</S.FormSelectLimitLabel>
							<S.SelectedWrapper>
								{member.tags.length > 0 ? (
									member.tags.map((tag, index) => <S.SelectedItem key={`${tag}-${index}`}>{tag}</S.SelectedItem>)
								) : (
									<S.InformationDesc>????????? ?????? ????????? ????????????. ?????? ????????? ???????????????.</S.InformationDesc>
								)}
							</S.SelectedWrapper>
						</div>
						<div>
							<button type="button" onClick={() => setModal(MODAL_STATE.openTeckTagSelect)}>
								?????? ?????? ??????
							</button>
						</div>
						{modal === MODAL_STATE.openTeckTagSelect && (
							<TechTagSelectModal onCloseModal={() => setModal(MODAL_STATE.closeModal)} />
						)}
					</S.FormOnBoardingInputGroup>
				</S.OnBoardingInfoWrapper>
			</S.Wrapper>

			<Button type="submit" buttonType="primary" padding="0.5em 0" fontSize="1.2rem" disabled={isSubmitting}>
				??????
			</Button>
		</S.Container>
	);
};

export default ProfileEdit;
