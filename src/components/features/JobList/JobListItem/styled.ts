import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.li`
	padding: 30px;
	border: 1px solid transparent;
	border-radius: 30px;
	background-color: ${({ theme }) => theme.colors.primary[100]};
	cursor: pointer;

	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.primary[600]};
	}
`;

export const InnerContainer = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
`;

export const ImageWrapper = styled.div<{ bgImageSrc: string }>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	min-width: 80px;
	max-width: 80px;
	height: 80px;
	margin-right: 16px;
	border-radius: 18px;
	background-color: white;
	background-image: ${({ bgImageSrc }) => bgImageSrc && `url(${bgImageSrc})`};
	background-repeat: no-repeat;
	background-size: 80% 80%;
	background-position: center;
	backface-visibility: hidden;
`;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 18px;
`;

export const DesciptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.h3`
	margin-bottom: 3px;
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	line-height: 1rem;
`;

export const CompanyName = styled.p`
	margin-bottom: 10px;
	font-size: 1rem;
	line-height: 1rem;
`;

export const ExpiredDate = styled.p`
	color: ${({ theme }) => theme.colors.grey[400]};

	& > strong {
		color: ${({ theme }) => theme.colors.primary[800]};
	}
`;

export const PlatformWrapper = styled.span`
	position: relative;
	display: flex;
	gap: 16px;
	margin-bottom: 0.5em;
`;

export const Platform = styled.span`
	display: flex;
	align-items: center;
	font-size: 0.875rem;
	color: ${({ theme }) => theme.colors.grey[400]};

	& > img {
		margin-right: 4px;
	}
`;

export const TechStacksWrapper = styled.div`
	display: flex;
	gap: 6px;
`;
