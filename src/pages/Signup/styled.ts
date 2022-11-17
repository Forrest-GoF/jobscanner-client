import styled from '@emotion/styled';
import * as S from '../Signin/styled';

export const Container = S.Container;
export const InnerContainer = S.InnerContainer;
export const LinkList = S.LinkList;
export const LinkListItem = S.LinkListItem;

export const FormContentWrapper = S.FormContentWrapper;
export const LogoBanner = S.LogoBanner;
export const Title = S.Title;
export const SubTitle = S.SubTitle;
export const Form = S.Form;
export const FormInputContainer = S.FormInputContainer;
export const FormLabel = S.FormLabel;
export const FormInputWrapper = S.FormInputWrapper;
export const FormInputIconWrapper = S.FormInputIconWrapper;
export const FormInput = S.FormInput;
export const FormSubmitButtonWrapper = S.FormSubmitButtonWrapper;
export const FormSubmitButton = S.FormSubmitButton;
export const Underlay = S.Underlay;

export const PolicyAccepttList = styled.ul`
	display: flex;
	flex-direction: column;
	margin-bottom: 2em;
`;

export const PolicyAcceptListItem = styled.li`
	& > label > span {
		color: ${({ theme }) => theme.colors.red[400]};
	}
`;

export const FormErrorMessage = S.FormErrorMessage;
