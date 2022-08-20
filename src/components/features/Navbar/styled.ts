import styled from '@emotion/styled';

export const Container = styled.nav`
	display: flex;
	align-items: center;
	height: 70px;
	padding: 0 20px;
	margin: 16px;
	border: 1px solid ${({ theme }) => theme.colors.primary[700]};
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
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
