import styled from '@emotion/styled';

export const Container = styled.div`
	padding-top: 0.5em;
`;

export const Title = styled.h3`
	padding-bottom: 1em;
	font-size: 1.5rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const Wrapper = styled.div`
	padding: 2.5em;
	border: 1.5px solid ${({ theme }) => theme.colors.grey[300]};
	border-radius: 1em;
`;

export const AccountDeleteWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Description = styled.p`
	font-size: 1.2rem;
`;

export const AccountDeleteButton = styled.button`
	padding: 0.5em 1em;
	border: 1px solid ${({ theme }) => theme.colors.red[400]};
	border-radius: 0.25em;
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	background: none;
	color: ${({ theme }) => theme.colors.red[400]};
	cursor: pointer;

	&:hover {
		background: ${({ theme }) => theme.colors.red[400]};
		color: ${({ theme }) => theme.colors.white};
	}
`;
