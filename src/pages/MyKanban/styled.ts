import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	max-height: calc(100% - 90px);
	padding: 16px 20px;
`;

export const NotFoundWrapper = styled.div`
	text-align: center;

	& > img {
		width: 100%;
	}

	& > p {
		font-size: 1rem;
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;
