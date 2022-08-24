import styled from '@emotion/styled';

export const Container = styled.nav`
	display: flex;
	align-items: center;
	height: 70px;
	padding: 0 20px;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.fs20};
`;

export const ListItem = styled.li`
	position: relative;
	display: flex;
	align-items: center;
	margin-left: 20px;
`;

export const DropdownWrapper = styled.div`
	position: relative;
	cursor: pointer;
`;

export const Dropdown = styled.div`
	position: absolute;
	width: 200px;
	margin-top: 1.2rem;
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.primary[700]};
	background-color: ${({ theme }) => theme.colors.white};
	transform: translate3d(-35%, 0, 0);
	z-index: 3;
`;

export const ProfileWrapper = styled.div`
	margin-left: 0.8rem;
	font-size: 1rem;
	line-height: 1.2rem;
	color: ${({ theme }) => theme.colors.grey[600]};
	& > p {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		color: ${({ theme }) => theme.colors.black};
	}
`;
