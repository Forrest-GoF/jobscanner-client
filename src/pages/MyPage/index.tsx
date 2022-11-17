import { Outlet, useLocation } from 'react-router-dom';
import * as S from './styled';
import { Layout } from '@/components';

const MyPage = () => {
	const { pathname } = useLocation();

	return (
		<Layout>
			<S.Container>
				<S.Title>마이페이지</S.Title>

				<S.InnerWrapper>
					<S.Aside>
						<S.SubNavigationButtonWrapper>
							<S.SubNavigationButton to="/mypage/profile" selected={pathname.includes('/profile')}>
								기본 정보
							</S.SubNavigationButton>
							<S.SubNavigationButton to="/mypage/email" selected={pathname.includes('/email')}>
								이메일 알림 설정
							</S.SubNavigationButton>
							<S.SubNavigationButton to="/mypage/password" selected={pathname.includes('/password')}>
								비밀번호 변경
							</S.SubNavigationButton>
							<S.SubNavigationButton to="/mypage/account" selected={pathname.includes('/account')}>
								계정/연동 관리
							</S.SubNavigationButton>
						</S.SubNavigationButtonWrapper>
					</S.Aside>
					<S.Content>
						<Outlet />
					</S.Content>
				</S.InnerWrapper>
			</S.Container>
		</Layout>
	);
};

export default MyPage;
