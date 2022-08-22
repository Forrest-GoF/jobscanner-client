import styled from '@emotion/styled';
import { StyledButtonProps } from './type';

export const Container = styled.div<StyledButtonProps>`
	flex: 1;
	border: 1px solid
		${({ buttonType, theme }) => (buttonType === 'primary' ? theme.colors.primary[700] : theme.colors.primary[700])};
	border-radius: ${({ borderRadius }) => borderRadius};
	background-color: ${({ buttonType, theme }) =>
		buttonType === 'primary' ? theme.colors.primary[700] : theme.colors.white};

	& > button {
		color: ${({ buttonType, theme }) => (buttonType === 'primary' ? theme.colors.white : theme.colors.primary[700])};
		font-size: ${({ fontSize }) => fontSize};
		font-weight: ${({ buttonType, theme }) =>
			buttonType === 'primary' ? theme.fontWeight.bold : theme.fontWeight.regular};
	}

	&:hover {
		background-color: ${({ buttonType, theme }) =>
			buttonType === 'primary' ? theme.colors.primary[700] : theme.colors.primary[700]};
		opacity: 0.8;

		& > button {
			color: ${({ buttonType, theme }) => (buttonType === 'primary' ? theme.colors.white : theme.colors.white)};
		}
	}
`;

export const Button = styled.button<StyledButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	width: 100%;
	height: 100%;
	padding: ${({ padding }) => padding};
	border: none;
	background: none;
	cursor: pointer;
`;
