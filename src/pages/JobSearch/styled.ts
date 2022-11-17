import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spin = keyframes`
  100% {
    transform: translate3d(0, -8px , 0);
  }
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: ${({ theme }) => theme.maxWidth};
	margin: 0 auto;
	padding: 3em 3em 0 3em;
`;

export const JobListContainer = styled.div`
	max-height: calc(100% - 200px);
	overflow-y: auto;
`;

export const LoadingWrapper = styled.div`
	display: flex;
	justify-content: center;

	& > img {
		max-width: 4em;
		animation: ${spin} 0.3s infinite alternate linear;
	}
`;
