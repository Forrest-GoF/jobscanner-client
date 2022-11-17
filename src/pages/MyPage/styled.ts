import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.main`
	width: ${({ theme }) => theme.maxWidth};
	margin: 0 auto;
	padding: 0 3em;
`;

export const Title = styled.h2`
	padding: 2em 0 1em 0;
	font-size: 1.6rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const InnerWrapper = styled.section`
	display: flex;
`;

export const Aside = styled.aside`
	width: 200px;
`;

export const Content = styled.div`
	flex: 1;
`;

export const SubNavigationButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SubNavigationButton = styled(Link)<{ selected: boolean }>`
	padding: 0.5rem 0;
	font-size: 1.2rem;
	font-weight: ${({ selected, theme }) => (selected ? theme.fontWeight.bold : theme.fontWeight.medium)};
	text-decoration: none;
	color: ${({ selected, theme }) => (selected ? theme.colors.primary[700] : theme.colors.grey[400])};
`;
