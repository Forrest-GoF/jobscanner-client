import styled from '@emotion/styled';
import { StyledContainerProps } from './type';

export const Container = styled.div<StyledContainerProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${({ paddingColumn, paddingRow }) => `${paddingColumn} ${paddingRow}`};
	border: 1px solid ${({ theme }) => theme.colors.primary[800]};
	border-radius: ${({ borderRadius }) => borderRadius};
	background-color: ${({ theme }) => theme.colors.primary[100]};
	font-size: ${({ fontSize }) => fontSize && fontSize};
`;

export const Wrapper = styled.span`
	max-width: 80px;
	padding: 3px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
