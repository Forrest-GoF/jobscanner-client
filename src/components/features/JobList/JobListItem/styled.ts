import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.li`
	padding: 24px;
	border: 1px solid transparent;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.colors.white};
	-webkit-box-shadow: 0 1px 2px rgb(56 65 74 / 15%);
	box-shadow: 0 1px 2px rgb(56 65 74 / 15%);
	transition: transform 0.2s;
	cursor: pointer;

	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.primary[300]};
		transform: translate3d(0, -6px, 0);
		-webkit-box-shadow: 1px 1px 6px 1px #66bfc8;
		box-shadow: 1px 1px 6px 1px #66bfc8;
	}
`;

export const InnerContainer = styled(Link)`
	display: flex;
	text-decoration: none;
`;

export const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 72px;
	max-width: 72px;
	height: 72px;
	margin-right: 16px;
	background-color: lightgray;
`;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const DesciptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;
	color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.h3`
	font-size: ${({ theme }) => theme.fontSize.fs20};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	line-height: ${({ theme }) => theme.lineHeight.lh20};
`;

export const CompanyName = styled.p``;

export const ExpiredDate = styled.p`
	color: ${({ theme }) => theme.colors.grey[400]};

	& > strong {
		color: ${({ theme }) => theme.colors.primary[800]};
	}
`;

export const SubInfoWrapper = styled.span`
	display: flex;
	gap: 8px;
`;

export const SubInfo = styled.span`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.colors.grey[400]};

	& > svg {
		margin-right: 4px;
	}

	& > svg > path {
		stroke: ${({ theme }) => theme.colors.grey[400]};
	}
`;

export const TechStacksWrapper = styled.div`
	display: flex;
	gap: 6px;
`;
