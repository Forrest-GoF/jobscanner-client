import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { StyledLinkButtonProps } from './type';

export const Container = styled.div<StyledLinkButtonProps>`
	display: flex;
	flex: 1;
	border: 1px solid
		${({ buttonType, theme }) => (buttonType === 'primary' ? theme.colors.primary[400] : theme.colors.primary[400])};
	border-radius: ${({ borderRadius }) => borderRadius};

	background-color: ${({ buttonType, theme }) =>
		buttonType === 'primary' ? theme.colors.primary[600] : theme.colors.white};

	& > a {
		color: ${({ buttonType, theme }) => (buttonType === 'primary' ? theme.colors.white : theme.colors.primary[600])};
		font-size: ${({ fontSize }) => fontSize};
		font-weight: ${({ buttonType, theme }) =>
			buttonType === 'primary' ? theme.fontWeight.bold : theme.fontWeight.regular};
	}

	&:hover {
		background-color: ${({ buttonType, theme }) =>
			buttonType === 'primary' ? theme.colors.primary[600] : theme.colors.primary[600]};
		opacity: 0.8;

		& > a {
			color: ${({ buttonType, theme }) => (buttonType === 'primary' ? theme.colors.white : theme.colors.white)};
		}
	}
`;

export const LinkButton = styled(Link)<StyledLinkButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	padding: ${({ padding }) => padding};
	text-decoration: none;
`;
