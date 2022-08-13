import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { StyledLinkButtonProps } from './type';

export const Container = styled.div<StyledLinkButtonProps>`
	flex: 1;
	border: 1px solid
		${({ buttonType, theme }) => (buttonType === 'primary' ? theme.colors.blue[700] : theme.colors.blue[700])};
	border-radius: 20px;
	background-color: ${({ buttonType, theme }) =>
		buttonType === 'primary' ? theme.colors.blue[700] : theme.colors.white};

	& > a {
		color: ${({ buttonType, theme }) => (buttonType === 'primary' ? theme.colors.white : theme.colors.blue[700])};
		font-size: ${({ fontSize }) => fontSize};
		font-weight: ${({ buttonType, theme }) =>
			buttonType === 'primary' ? theme.fontWeight.bold : theme.fontWeight.regular};
	}

	&:hover {
		background-color: ${({ buttonType, theme }) =>
			buttonType === 'primary' ? theme.colors.blue[700] : theme.colors.blue[700]};
		opacity: 0.8;

		& > a {
			color: ${({ buttonType, theme }) => (buttonType === 'primary' ? theme.colors.white : theme.colors.white)};
		}
	}
`;

export const LinkButton = styled.a<StyledLinkButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	width: 100%;
	height: 100%;
	text-decoration: none;
`;
