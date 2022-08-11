import React from 'react';
import * as S from './styled';
import { MdOutlineNotificationsActive, MdLanguage, MdOutlineDarkMode } from 'react-icons/md';
import { Avatar } from '@/components/shared';

const Navbar = () => {
	return (
		<S.Container>
			<S.List>
				<S.ListItem>
					<MdLanguage />
				</S.ListItem>
				<S.ListItem>
					<MdOutlineDarkMode />
				</S.ListItem>
				<S.ListItem>
					<MdOutlineNotificationsActive />
					<S.NotificationCounter>1</S.NotificationCounter>
				</S.ListItem>
				<S.ListItem>
					<Avatar
						size="30px"
						imgSrc={
							'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
						}
					/>
				</S.ListItem>
			</S.List>
		</S.Container>
	);
};

export default Navbar;
