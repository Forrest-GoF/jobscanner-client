import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Avatar, Button, LinkButton } from '@/components'
import * as S from './styled';
import { memberState } from '@/stores/member';
import { logout } from '@/apis/auth';
import { Member } from '@/types/apis/auth';
import { LogoIcon, ProfileDefaultIcon } from '@/assets/images/icons';

const Navbar = () => {
	const [isVisiableDropdown, setIsVisibleDropdown] = useState(false);
	const member = useRecoilValue<Member>(memberState);

	const handleLogoutButtonClick = async () => {
		try {
			logout();
			window.location.reload();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<S.Container>
			<S.Wrapper>
				<S.NavigationWrapper>
					<h1>
						<Link to="/">
							<img className="logo" src={LogoIcon} alt="잡스캐너 로고" />
						</Link>
					</h1>
				</S.NavigationWrapper>

				<S.List>
					{member.email ? (
						<>
							<S.Profile>
								<S.DropdownWrapper onClick={() => setIsVisibleDropdown(!isVisiableDropdown)}>
									<S.AvatarWrapper>
										<Avatar size="2.5em" imgSrc={member.imageUrl ?? ProfileDefaultIcon} />
										<S.ProfileWrapper>
											<span className='user-nickname'>{member.nickname}</span>
											<span className='user-email'>{member.email}</span>
										</S.ProfileWrapper>
									</S.AvatarWrapper>

									{isVisiableDropdown && (
										<S.Dropdown>
											<S.DropdownButtonWrapper>
												<LinkButton
													href="/status/bookmark"
													buttonType="normal"
													borderRadius="0.5em"
													padding="0.5em 1em"
												>
													북마크
												</LinkButton>
												<LinkButton href="/mypage/profile" buttonType="normal" borderRadius="0.5em" padding="0.5em 1em">
													마이페이지
												</LinkButton>
												<Button
													type="button"
													buttonType="primary"
													padding="0.5em 1em"
													borderRadius="0.5em"
													fontSize="1rem"
													onClick={handleLogoutButtonClick}
												>
													Logout
												</Button>
											</S.DropdownButtonWrapper>
										</S.Dropdown>
									)}
								</S.DropdownWrapper>
							</S.Profile>
						</>
					) : (
						<>
							<S.ListItem>
								<LinkButton
									href="/signin"
									buttonType="primary"
									padding="0.5em 1.1rem"
									borderRadius="0.8rem"
									fontSize="1.1rem"
								>
									로그인
								</LinkButton>
							</S.ListItem>
							<S.ListItem>
								<LinkButton
									href="/signup"
									buttonType="normal"
									padding="0.5em 1.1rem"
									borderRadius="0.8rem"
									fontSize="1.1rem"
								>
									회원가입
								</LinkButton>
							</S.ListItem>
						</>
					)}
				</S.List>
			</S.Wrapper>
		</S.Container>
	);
};

export default Navbar;
