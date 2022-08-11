import styled from '@emotion/styled';

export const Container = styled.nav`
	display: flex;
	align-items: center;
	height: 52px;
	border-bottom: 2px solid ${({ theme }) => theme.colors.grey[200]};
`;

export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	padding: 20px;
	font-size: ${({ theme }) => theme.fontSize.fs20};
`;

export const ListItem = styled.li`
	position: relative;
	display: flex;
	align-items: center;
	margin-left: 20px;
`;

export const NotificationCounter = styled.span`
	position: absolute;
	top: -5px;
	right: -5px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: red;
	font-size: ${({ theme }) => theme.fontSize.fs10};
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	color: ${({ theme }) => theme.colors.white};
`;
