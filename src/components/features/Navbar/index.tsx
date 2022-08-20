import * as S from './styled';
import { Link } from 'react-router-dom';
import { Avatar, LinkButton } from '@/components/shared';

const Navbar = () => {
	return (
		<S.Container>
			<S.List>
				<S.ListItem>
					<Avatar
						size="50px"
						imgSrc={
							'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
						}
					/>
					<S.ProfileWrapper>
						<p>강소마님 반갑습니다 👋🏻</p>
						SW Developer
					</S.ProfileWrapper>
				</S.ListItem>
				<S.ListItem>
					<LinkButton href="/login" buttonType="primary" padding="1rem 2rem" borderRadius="0.5rem" fontSize="1rem">
						로그인
					</LinkButton>
				</S.ListItem>
			</S.List>
		</S.Container>
	);
};

export default Navbar;
