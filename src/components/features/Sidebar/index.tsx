import React from 'react';
import * as S from './styled';
import { FaThList } from 'react-icons/fa';
import { BsFillKanbanFill } from 'react-icons/bs';
import HorizontalRule from '../../shared/HorizontalRule/index';

const SideBar = () => {
	return (
		<S.Container>
			<S.TopWrapper>
				<S.TopLogoWrapper to="/">
					<span>JOB SCANNER</span>
				</S.TopLogoWrapper>
			</S.TopWrapper>

			<HorizontalRule borderWidth="0.5px" />

			<S.MiddleWrapper>
				<S.SideNavList>
					<S.SideNavListTitle>Main</S.SideNavListTitle>

					<S.SideNavListItem>
						<S.SideNavListItemInnerWrapper to="/">
							<S.SideNavListItemIconWrapper>
								<FaThList />
							</S.SideNavListItemIconWrapper>
							Job List
						</S.SideNavListItemInnerWrapper>
					</S.SideNavListItem>
					<S.SideNavListItem>
						<S.SideNavListItemInnerWrapper to="/kanban">
							<S.SideNavListItemIconWrapper>
								<BsFillKanbanFill />
							</S.SideNavListItemIconWrapper>
							Job Kanban
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
