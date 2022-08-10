import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const loaderCircileSpin1 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(720deg);
  }
`;

const loaderCircileSpin2 = keyframes`
  50% {
    transform: scale(1.3) translate(0, 0);
    box-shadow: 0 0 0 #90c7ff;
    opacity: 0.8;
  }
`;

const loaderCircileSpin3 = keyframes`
  50% {
    transform: scale(1.3) translate(0, 0);
    box-shadow: 0 0 0 #90c7ff;
    opacity: 0.8;
  }
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`;

export const LoaderCircle = styled.div`
	position: relative;
	width: 0;
	height: 0;
	margin: 0 auto;
	animation: ${loaderCircileSpin1} 1.2s infinite ease;

	&:before,
	&:after {
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		top: 50%;
		left: 50%;
		margin-top: -10px;
		margin-left: -10px;
		border-radius: 10px;
		opacity: 0.9;
	}

	&:before {
		background: #90c7ff;
		transform: translate(-0.75em, -0.75em) scale(1);
		box-shadow: 1.5em 1.5em 0 #90c7ff;
		animation: ${loaderCircileSpin2} 1.2s infinite ease;
	}

	&:after {
		background: #90c7ff;
		transform: translate(0.75em, -0.75em) scale(1);
		box-shadow: -1.5em 1.5em 0 #90c7ff;
		animation: ${loaderCircileSpin3} 1.2s infinite ease;
	}
`;
