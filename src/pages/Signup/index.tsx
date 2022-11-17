
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import * as Sentry from '@sentry/react';
import { Horizon } from '@/components/shared/HorizontalRule/styled';
import * as S from './styled';
import { memberState } from '@/stores/member';
import { getMember } from '@/apis/member';
import { signup } from '@/apis/auth';
import { SignUpFormData } from '@/types/apis/auth';
import { RESPONSE_ERROR_MESSAGES, USER_ERROR_MESSAGE, RESPONSE_SUCCESS_CREATED } from '@/constants/api';
import { KEYS, setLocalStorageItem } from '@/utils/storage';
import { LogoIcon, MascotFull } from '@/assets/images/icons';


const Signup = () => {
	const { pathname } = useLocation();
	const navigator = useNavigate();
	const setMemberState = useSetRecoilState(memberState);

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { isSubmitting, isDirty, errors },
	} = useForm<SignUpFormData>();

	const { email, password, validPassword, terms, personalInformation, promotion } = watch();

	const onCheckAllChange = (event: React.FormEvent<HTMLInputElement>) => {
		const { checked } = event.currentTarget;

		if (checked) {
			setValue('terms', true);
			setValue('personalInformation', true);
			setValue('promotion', true);
		} else {
			setValue('terms', false);
			setValue('personalInformation', false);
			setValue('promotion', false);
		}
	};

	const onSignupFormSubmit = async (signUpFormData: SignUpFormData) => {
		const signUpRequestBody = {
			nickname: signUpFormData.nickname,
			email: signUpFormData.email,
			password: signUpFormData.password,
			agreement: {
				terms: signUpFormData.terms,
				personalInformation: signUpFormData.personalInformation,
				promotion: signUpFormData.promotion,
			},
		};

		try {
			const { data: signUpResponse, status } = await signup(signUpRequestBody);
			setLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN, signUpResponse.data.appToken);

			const { data: member } = await getMember();
			setMemberState(member.data);

			if (status === RESPONSE_SUCCESS_CREATED) {
				navigator('/onboarding');
			}
		} catch (error) {
      if (error instanceof AxiosError && error.response?.data.message === RESPONSE_ERROR_MESSAGES.notFoundMember) {
				alert(USER_ERROR_MESSAGE.alreadyEmailExist);
			}
      console.error(error);
			Sentry.captureException(error);
		}
	};

	return (
		<S.Container>
			<S.InnerContainer>
				<S.LinkList>
					<S.LinkListItem selected={pathname === '/signin'}>
						<Link to="/signin">로그인</Link>
					</S.LinkListItem>
					<S.LinkListItem selected={pathname === '/signup'}>
						<Link to="/signup">회원가입</Link>
					</S.LinkListItem>
				</S.LinkList>

				<S.FormContentWrapper>
					<S.LogoBanner>
						<S.Title>
							<Link to="/">
								<img src={LogoIcon} alt="로고" />
							</Link>
						</S.Title>
					</S.LogoBanner>

					<S.Form onSubmit={handleSubmit(onSignupFormSubmit)}>
						<S.FormInputContainer>
							<S.FormInputWrapper>
								<S.FormInput
									id="nickname"
									type="text"
									placeholder="닉네임을 입력해주세요"
									padding="0.5rem 2rem 0.5rem 0.8rem"
									{...register('nickname', {
										minLength: {
											value: 2,
											message: '최소 2자 이상으로 입력해주세요.',
										},
										maxLength: {
											value: 10,
											message: '최대 10자 이하로 입력해주세요.',
										},
										pattern: {
											value: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/,
											message: '한글, 알파벳, 숫자만 입력해주세요.',
										},
									})}
								/>
								{errors.nickname && <S.FormErrorMessage>{errors?.nickname.message}</S.FormErrorMessage>}
							</S.FormInputWrapper>
						</S.FormInputContainer>
						<S.FormInputContainer>
							<S.FormInputWrapper>
								<S.FormInput
									id="email"
									type="email"
									placeholder="이메일을 입력해주세요"
									padding="0.5rem 2rem 0.5rem 0.8rem"
									{...register('email', {
										required: true,
										pattern: {
											value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
											message: '이메일이 올바르지 않습니다.',
										},
									})}
								/>
								{errors?.email && <S.FormErrorMessage>{errors.email.message}</S.FormErrorMessage>}
							</S.FormInputWrapper>
						</S.FormInputContainer>
						<S.FormInputContainer>
							<S.FormInputWrapper>
								<S.FormInput
									id="password"
									type="password"
									placeholder="비밀번호을 입력해주세요"
									padding="0.5rem 2rem 0.5rem 0.8rem"
									{...register('password', {
										required: true,
										pattern: {
											value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,16}$/,
											message: '비밀번호가 올바르지 않습니다.',
										},
									})}
								/>
								{errors?.password && <S.FormErrorMessage>{errors.password.message}</S.FormErrorMessage>}
							</S.FormInputWrapper>
						</S.FormInputContainer>
						<S.FormInputContainer>
							<S.FormInputWrapper>
								<S.FormInput
									id="password-confirm"
									type="password"
									placeholder="비밀번호을 재입력해주세요"
									padding="0.5rem 2rem 0.5rem 0.8rem"
									{...register('validPassword', {
										required: true,
										pattern: {
											value: RegExp(watch('password')),
											message: '비밀번호가 일치하지 않습니다.',
										},
									})}
								/>
								{errors?.validPassword && <S.FormErrorMessage>{errors.validPassword.message}</S.FormErrorMessage>}
							</S.FormInputWrapper>
						</S.FormInputContainer>

						<S.PolicyAccepttList>
							<S.PolicyAcceptListItem>
								<input
									id="all"
									type="checkbox"
									onChange={onCheckAllChange}
									checked={terms && personalInformation && promotion}
								/>
								<label htmlFor="all">전체동의</label>
							</S.PolicyAcceptListItem>

							<Horizon borderWidth="1px" margin="0.5em 0" />
							<S.PolicyAcceptListItem>
								<input
									id="terms"
									type="checkbox"
									checked={terms}
									{...register('terms', {
										required: {
											value: true,
											message: '필수입니다.',
										},
										onChange: () => setValue('terms', !terms),
									})}
								/>
								<label htmlFor="terms">
									이용약관 동의 <span>*</span>{' '}
									{errors?.terms && <S.FormErrorMessage>{errors.terms.message}</S.FormErrorMessage>}
								</label>
							</S.PolicyAcceptListItem>
							<S.PolicyAcceptListItem>
								<input
									id="personalInformation"
									type="checkbox"
									checked={personalInformation}
									{...register('personalInformation', {
										required: {
											value: true,
											message: '필수입니다.',
										},
										onChange: () => setValue('personalInformation', !personalInformation),
									})}
								/>
								<label htmlFor="personalInformation">
									잡스캐너 개인정보 수집 및 이용 동의 <span>*</span>{' '}
									{errors?.personalInformation && (
										<S.FormErrorMessage>{errors.personalInformation.message}</S.FormErrorMessage>
									)}
								</label>
							</S.PolicyAcceptListItem>
							<S.PolicyAcceptListItem>
								<input
									id="promotion"
									type="checkbox"
									checked={promotion}
									{...register('promotion', {
										onChange: () => setValue('promotion', !promotion),
									})}
								/>
								<label htmlFor="promotion">[선택] 마게팅 활용 동의 및 광고 수신 동의</label>
							</S.PolicyAcceptListItem>
						</S.PolicyAccepttList>

						<S.FormSubmitButtonWrapper>
							<S.FormSubmitButton type="submit" disabled={isSubmitting}>
								회원가입
							</S.FormSubmitButton>
						</S.FormSubmitButtonWrapper>
					</S.Form>
				</S.FormContentWrapper>
			</S.InnerContainer>

			<S.Underlay>
				<img src={MascotFull} alt="백그라운드" />
			</S.Underlay>
		</S.Container>
	);
};

export default Signup;
