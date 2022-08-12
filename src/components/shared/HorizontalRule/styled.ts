import styled from '@emotion/styled';
import { StyledHorizonProps } from './type';

export const Horizon = styled.hr<StyledHorizonProps>`
	height: 0;
	margin: 0;
	border: ${({ borderWidth }) => borderWidth} solid ${({ theme }) => theme.colors.grey[100]};
`;
