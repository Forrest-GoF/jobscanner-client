import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// 컨테이너
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 3;
	min-width: 200px;
	max-width: 300px;
	min-height: 100vh;
	border-right: 1px solid ${({ theme }) => theme.colors.grey[100]};
`;

// 사이드바 - 상위 부분
export const TopWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
`;

export const TopLogoWrapper = styled(Link)`
	text-decoration: none;
	font-size: ${({ theme }) => theme.fontSize.fs20};
	& > span {
		color: ${({ theme }) => theme.colors.primary[700]};
	}
`;

// 사이드바 - 중간 부분
export const MiddleWrapper = styled.div``;

export const SideNavList = styled.ul`
	display: flex;
	flex-direction: column;
`;

export const SideNavListTitle = styled.p`
	margin: 8px 0;
	padding: 0 16px;
	font-size: ${({ theme }) => theme.fontSize.fs13};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	color: ${({ theme }) => theme.colors.grey[200]};
`;

export const SideNavListItem = styled.li`
	display: flex;
	height: 30px;
	font-size: ${({ theme }) => theme.fontSize.fs16};

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary[100]};
	}
`;

export const SideNavListItemInnerWrapper = styled(Link)`
	display: flex;
	align-items: center;
	flex: 1;
	height: 100%;
	padding: 0 16px;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.grey[400]};

	& > span > svg {
		color: ${({ theme }) => theme.colors.primary[700]};
	}
`;

export const SideNavListItemIconWrapper = styled.span`
	margin-right: 8px;
`;

// 사이드바 - 하단 부분
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
