import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spin = keyframes`
  100% {
    transform: translate3d(0, -8px , 0);
  }
`;

export const JobListContainer = styled.div`
	max-height: calc(100% - 200px);
	padding: 16px;
	overflow-y: auto; ;
`;

export const LoadingWrapper = styled.div`
	display: flex;
	justify-content: center;

	& > img {
		max-width: 4em;
		animation: ${spin} 0.3s infinite alternate linear;
	}
`;
