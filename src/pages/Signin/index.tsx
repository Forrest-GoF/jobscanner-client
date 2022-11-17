import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import * as Sentry from '@sentry/react';
import * as S from './styled';
import { getMember } from '@/apis/member';
import { signin } from '@/apis/auth';
import { memberState } from '@/stores/member';
import { SigninFormData } from '@/types/apis/auth';
import { authorizationCodeURIs } from '@/constants/auth';
import {
	RESPONSE_ERROR_MESSAGES,
	USER_ERROR_MESSAGE,
} from '@/constants/api';
import { KEYS, setLocalStorageItem } from '@/utils/storage';
import { RiKakaoTalkFill, RiGithubFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { LogoIcon, MascotFull } from '@/assets/images/icons';


const Signin = () => {
	const navigator = useNavigate();
	const { pathname } = useLocation();
	const setMemberState = useSetRecoilState(memberState);

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SigninFormData>();

	const handleSocialLoginBtnClick = async (social: string) => {
		window.location.href = authorizationCodeURIs[social];
	};

	const onSigninFormSubmit = async (signinFormData: SigninFormData) => {
		try {
			const { data: signInResponse } = await signin(signinFormData);
			setLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN, signInResponse.data.appToken);

			const { data: member } = await getMember();
			setMemberState(member.data);

			navigator('/');
		} catch (error) {
			if (
				(error instanceof AxiosError && error.response?.data.message === RESPONSE_ERROR_MESSAGES.notFoundMember) ||
				(error instanceof AxiosError && error.response?.data.message === RESPONSE_ERROR_MESSAGES.incorrectPassword)
			) {
				alert(USER_ERROR_MESSAGE.notFoundMember);
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
					<S.Form onSubmit={handleSubmit(onSigninFormSubmit)}>
						<S.FormInputContainer>
							<S.FormLabel htmlFor="email">이메일</S.FormLabel>
							<S.FormInputWrapper>
								<S.FormInput
									id="email"
									type="email"
									placeholder="user@email.com"
									{...register('email')}
									padding="0.5rem 2rem 0.5rem 0.8rem"
								/>
							</S.FormInputWrapper>
						</S.FormInputContainer>
						<S.FormInputContainer>
							<S.FormLabel htmlFor="password">비밀번호</S.FormLabel>
							<S.FormInputWrapper>
								<S.FormInput
									id="password"
									type="password"
									placeholder="**************"
									{...register('password')}
									padding="0.5rem 2rem 0.5rem 0.8rem"
								/>
							</S.FormInputWrapper>
						</S.FormInputContainer>
						<S.FormSubmitButtonWrapper>
							<S.FormSubmitButton type="submit" disabled={isSubmitting}>
								로그인
							</S.FormSubmitButton>
						</S.FormSubmitButtonWrapper>
					</S.Form>
					<S.PerforationText>다른 계정으로 로그인</S.PerforationText>
					<S.SocialLoginButtonWrapper>
						<S.SocialLoginButton type="button">
							<S.SocialSymbolWrapper bgColor="#ffffff" onClick={() => handleSocialLoginBtnClick('google')}>
								<FcGoogle />
							</S.SocialSymbolWrapper>
							<S.SocialSymbolTitle>Google</S.SocialSymbolTitle>
						</S.SocialLoginButton>
						<S.SocialLoginButton type="button">
							<S.SocialSymbolWrapper bgColor="#FEE500" onClick={() => handleSocialLoginBtnClick('kakao')}>
								<RiKakaoTalkFill />
							</S.SocialSymbolWrapper>
							<S.SocialSymbolTitle>Kakao</S.SocialSymbolTitle>
						</S.SocialLoginButton>
						<S.SocialLoginButton type="button">
							<S.SocialSymbolWrapper
								bgColor="#24292E"
								fill="#ffffff"
								onClick={() => handleSocialLoginBtnClick('github')}
							>
								<RiGithubFill />
							</S.SocialSymbolWrapper>
							<S.SocialSymbolTitle>Github</S.SocialSymbolTitle>
						</S.SocialLoginButton>
					</S.SocialLoginButtonWrapper>
					<S.PolicyDescriptionWrapper>
						<S.PolicyDescription href="#" target="_blank">
							이용약관
						</S.PolicyDescription>
						<S.PolicyDescription href="#" target="_blank">
							개인정보 처리방침
						</S.PolicyDescription>
					</S.PolicyDescriptionWrapper>
				</S.FormContentWrapper>
			</S.InnerContainer>

      <S.Underlay>
        <img src={MascotFull} alt="백그라운드" />
      </S.Underlay>
		</S.Container>
	);
};

export default Signin;
