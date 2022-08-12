import styled from '@emotion/styled';
import { StyledContainerProps } from './type';

export const Container = styled.div<StyledContainerProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${({ paddingColumn, paddingRow }) => `${paddingColumn} ${paddingRow}`};
	border: 1px solid ${({ theme }) => theme.colors.blue[800]};
	border-radius: ${({ borderRadius }) => borderRadius};
	background-color: ${({ theme }) => theme.colors.blue[100]};
`;

export const Wrapper = styled.span``;
