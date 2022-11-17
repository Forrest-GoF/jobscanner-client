import styled from '@emotion/styled';

export const Container = styled.div`
	min-height: 4em;
	max-height: 4em;
	border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey[400]};
`;

export const Wrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.maxWidth};
	height: 100%;
	margin: 0 auto;
	padding: 0 3em;
`;

export const AvatarWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5em;
`;

export const ProfileWrapper = styled.div`
	font-size: 1rem;
	line-height: 1.2rem;
	color: ${({ theme }) => theme.colors.grey[500]};

	& > span {
		display: block;
	}

	.user-nickname {
		font-size: 0.9rem;
		font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	}

	.user-email {
		font-size: 0.8rem;
		color: ${({ theme }) => theme.colors.grey[400]};
	}
`;

export const DropdownWrapper = styled.div`
	position: relative;
	cursor: pointer;
`;

export const Dropdown = styled.div`
	position: absolute;
	width: inherit;
	margin-top: 1.2rem;
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.primary[600]};
	border-radius: 1em;
	background-color: ${({ theme }) => theme.colors.white};
	transform: translate3d(-35%, 0, 0);
	z-index: 3;
`;

export const DropdownButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
`;

export const NavigationWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	height: 100%;

	& > h1 > a {
		display: flex;
		align-items: center;
	}

	.logo {
		width: 150px;
		height: auto;
	}
`;

export const List = styled.ul`
	display: flex;
	align-items: center;
	height: 100%;

	&:nth-last-of-type(2) {
		display: flex;
	}
`;

export const ListItem = styled.li`
	&:nth-last-of-type(1) {
		margin-left: 0.25em;
	}
	&:nth-last-of-type(2) {
		margin-left: 1em;
	}
`;

export const Search = styled.li`
	margin-right: 1em;
`;

export const Profile = styled.li`
	display: flex;
	align-items: center;
`;

export const SearchButton = styled.button`
	display: flex;
	padding: 0;
	margin: 0;
	border: 0;
	background-color: transparent;
`;
