import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './styled';
import { FaThList } from 'react-icons/fa';
import { BsFillKanbanFill } from 'react-icons/bs';
import LogoEN from '@/assets/images/shared/logo-en.svg';

const SideBar = () => {
	const { pathname } = useLocation();

	return (
		<S.Container>
			<S.TopWrapper>
				<h1>
					<Link to="/">
						<S.Logo src={LogoEN} alt="로고" />
					</Link>
				</h1>
			</S.TopWrapper>

			<S.MiddleWrapper>
				<S.SideNavList>
					<S.SideNavListTitle>Main</S.SideNavListTitle>

					<S.SideNavListItem>
						<S.SideNavListItemInnerWrapper to="/" selected={pathname === '/' || pathname.includes('/jobs')}>
							<S.SideNavListItemIconWrapper>
								<FaThList />
							</S.SideNavListItemIconWrapper>
							공고 탐색
						</S.SideNavListItemInnerWrapper>
					</S.SideNavListItem>
					<S.SideNavListItem>
						<S.SideNavListItemInnerWrapper to="/kanban" selected={pathname === '/kanban'}>
							<S.SideNavListItemIconWrapper>
								<BsFillKanbanFill />
							</S.SideNavListItemIconWrapper>
							공고 현황
						</S.SideNavListItemInnerWrapper>
					</S.SideNavListItem>
				</S.SideNavList>
			</S.MiddleWrapper>
			<S.BottomWrapper>
				<S.CopyrightWrapper>
					<S.Copyright>Copyright © 2022 Job Scanner.</S.Copyright>
					<S.Copyright>All rights reserved.</S.Copyright>
				</S.CopyrightWrapper>
			</S.BottomWrapper>
		</S.Container>
	);
};

export default SideBar;
