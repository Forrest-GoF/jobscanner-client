import { Link } from 'react-router-dom';
import * as S from './styled';
import { KAKAO_AUTH_URI } from '@/constants/auth';
import { RiKakaoTalkFill, RiGithubFill } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import LogoEN from '@/assets/images/shared/logo-en.svg';
import BannerImg1 from '@/assets/images/login/job-search.svg';
import BannerImg2 from '@/assets/images/login/job-chat.svg';
import BannerImg3 from '@/assets/images/login/job-schedule.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const Login = () => {
	const handleKakaoLoginBtnClick = () => {
		window.location.href = KAKAO_AUTH_URI;
	};

	return (
		<S.Container>
			<S.Overlay />
			<S.InnerContainer>
				<S.BannerWrapper>
					<S.BannerDescriptionWrapper>
						<span>반가워요 👋🏻</span>
						<p>
							나만의 채용 히스토리 · 채팅 커뮤니티
							<br />
							<strong>잡스토리</strong>입니다.
						</p>
					</S.BannerDescriptionWrapper>
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: true,
						}}
						modules={[Autoplay]}
						loop={true}
					>
						<SwiperSlide>
							<img src={BannerImg1} alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={BannerImg2} alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={BannerImg3} alt="" />
						</SwiperSlide>
					</Swiper>
				</S.BannerWrapper>

				<S.LoginWrapper>
					<S.LoginDesciptionPanel>
						<S.LoginTitle>
							<Link to="/">
								<img src={LogoEN} alt="로고" />
							</Link>
						</S.LoginTitle>
					</S.LoginDesciptionPanel>

					<S.LoginForm onSubmit={() => {}}>
						<fieldset>
							<S.LoginFormInputContainer>
								<S.LoginFormLabel htmlFor="email">이메일</S.LoginFormLabel>
								<S.LoginFormInputWrapper>
									<S.LoginFormInputIconWrapper>
										<AiOutlineMail />
									</S.LoginFormInputIconWrapper>
									<S.LoginFormInput id="email" type="email" name="email" placeholder="이메일을 입력해주세요." />
								</S.LoginFormInputWrapper>
							</S.LoginFormInputContainer>
							<S.LoginFormInputContainer>
								<S.LoginFormLabel htmlFor="password">비밀번호</S.LoginFormLabel>
								<S.LoginFormInputWrapper>
									<S.LoginFormInputIconWrapper>
										<RiLockPasswordLine />
									</S.LoginFormInputIconWrapper>
									<S.LoginFormInput
										id="password"
										type="password"
										name="password"
										placeholder="비밀번호를 입력해주세요."
									/>
								</S.LoginFormInputWrapper>
							</S.LoginFormInputContainer>
							<S.LoginFormSubmitButtonWrapper>
								<S.LoginFormSubmitButton type="submit">로그인</S.LoginFormSubmitButton>
							</S.LoginFormSubmitButtonWrapper>
						</fieldset>
					</S.LoginForm>

					<S.PerforationText>다른 계정으로 로그인</S.PerforationText>
					<S.SocialLoginButtonWrapper>
						<S.SocialLoginButton type="button">
							<S.SocialSymbolWrapper bgColor="#FEE500" onClick={() => handleKakaoLoginBtnClick()}>
								<RiKakaoTalkFill />
							</S.SocialSymbolWrapper>
							<S.SocialSymbolTitle>Kakao</S.SocialSymbolTitle>
						</S.SocialLoginButton>
						<S.SocialLoginButton type="button">
							<S.SocialSymbolWrapper bgColor="#24292E" fill="#ffffff">
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
				</S.LoginWrapper>
			</S.InnerContainer>
		</S.Container>
	);
};

export default Login;
