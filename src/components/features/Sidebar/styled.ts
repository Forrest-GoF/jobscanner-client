import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type StyledSideNavItemProps = {
	selected: boolean;
};

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 3;
	min-width: 250px;
	max-width: 250px;
	min-height: 100vh;
	border-right: 1px solid ${({ theme }) => theme.colors.grey[100]};
`;

export const TopWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Logo = styled.img`
	width: auto;
	height: 70px;
`;

export const MiddleWrapper = styled.div``;

export const SideNavList = styled.ul`
	display: flex;
	flex-direction: column;
`;

export const SideNavListTitle = styled.p`
	margin: 1rem 0;
	padding: 0 16px;
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	color: ${({ theme }) => theme.colors.grey[200]};
`;

export const SideNavListItem = styled.li`
	display: flex;
	height: 100%;
	margin-bottom: 1rem;
	font-size: ${({ theme }) => theme.fontSize.fs16};
`;

export const SideNavListItemInnerWrapper = styled(Link)<StyledSideNavItemProps>`
	display: flex;
	align-items: center;
	flex: 1;
	height: 100%;
	padding: 1.2rem 2.6rem;
	margin: 0 1rem;
	border-radius: 0.5rem;
	background-color: ${({ selected, theme }) => (selected ? theme.colors.primary[700] : 'transparent')};
	font-size: 1.3rem;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ selected, theme }) => (selected ? theme.colors.white : theme.colors.grey[400])};
	text-decoration: none;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary[700]};
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const SideNavListItemIconWrapper = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	margin-right: 4px;
`;

export const BottomWrapper = styled.div`
	margin-top: auto;
	margin-bottom: 50px;
`;

export const CopyrightWrapper = styled.span`
	text-align: center;
`;

export const Copyright = styled.p`
	font-size: ${({ theme }) => theme.fontSize.fs10};
	line-height: ${({ theme }) => theme.lineHeight.lh16};
`;
