import styled from '@emotion/styled';
import { StyledContainerProps } from './type';

export const Container = styled.div<StyledContainerProps>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({ size }) => size};
	height: ${({ size }) => size};
	border-radius: 50%;
	overflow: hidden;
	user-select: none;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	color: transparent;
	text-indent: 10000px;
	text-align: center;
`;
