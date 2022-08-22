import * as S from './styled';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '@/stores/user';
import { Avatar, Button, LinkButton } from '@/components/shared';
import { logout } from '@/apis/auth';
import { useState } from 'react';

const Navbar = () => {
	const [isVisiableDropdown, setIsVisibleDropdown] = useState(false);
	const userInfo = useRecoilValue(userInfoState);

	const handleLogoutButtonClick = async () => {
		logout();
	};

	return (
		<S.Container>
			<S.List>
				{userInfo.email ? (
					<S.ListItem>
						<S.DropdownWrapper onClick={() => setIsVisibleDropdown(!isVisiableDropdown)}>
							<Avatar size="50px" imgSrc={userInfo.imageUrl} />
							{isVisiableDropdown && (
								<S.Dropdown>
									<Button type="button" onClick={handleLogoutButtonClick} padding="0.5rem 1rem" borderRadius="8px">
										로그아웃
									</Button>
								</S.Dropdown>
							)}
						</S.DropdownWrapper>
						<S.ProfileWrapper>
							<p>{userInfo.nickname}님 반갑습니다 👋🏻</p>
							{userInfo.email}
						</S.ProfileWrapper>
					</S.ListItem>
				) : (
					<S.ListItem>
						<LinkButton href="/login" buttonType="primary" padding="1rem 2rem" borderRadius="0.5rem" fontSize="1rem">
							로그인
						</LinkButton>
					</S.ListItem>
				)}
			</S.List>
		</S.Container>
	);
};

export default Navbar;
