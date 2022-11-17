import styled from '@emotion/styled';

export const Container = styled.main`
	position: relative;
	overflow-y: auto;
`;

export const InnerContainer = styled.div`
	max-width: ${({ theme }) => theme.maxWidth};
	margin: 0 auto;
	padding: 0 3em;
`;

export const DetailDescription = styled.div``;

// Detail Introduction

export const DetailIntroWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 2em 0 4em 0;
`;

export const DetailIntroTitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	& > button {
		position: relative;
		inset: 0;
	}
`;

export const JobTitle = styled.h2`
	font-size: 1.375rem;
	font-weight: ${({ theme }) => theme.fontWeight.strongBold};
	color: ${({ theme }) => theme.colors.black};
`;

export const DetailIntroSubTitleWrapper = styled.div`
	display: flex;
	margin-bottom: 1em;
`;

export const CompanyName = styled.p`
	font-size: 0.875rem;
	color: ${({ theme }) => theme.colors.black};

	&:after {
		content: '|';
		margin: 0 0.5em;
	}
`;

export const Location = styled.p`
	font-size: 0.875rem;
`;

export const DetailIntroSubInfoWrapper = styled.div`
	display: flex;
	font-size: 0.75rem;
	margin-bottom: 1em;
`;

export const DetailIntroSubInfo = styled.span`
	display: flex;
	align-items: center;
	margin-right: 0.5em;

	& > svg > path {
		stroke: ${({ theme }) => theme.colors.grey[500]};
	}
`;

export const ApplyPeriod = styled.p`
	font-size: 0.75rem;
	color: ${({ theme }) => theme.colors.black};

	& > strong {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		color: ${({ theme }) => theme.colors.primary[800]};
	}
`;

export const TechStacksWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const TechStacks = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 0.25em;
	margin-bottom: 1em;
	font-size: 0.75rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const DetailIntroBtnWrapper = styled.div`
	position: relative;
	display: flex;
	gap: 8px;

	& > button {
		flex: 1;
		font-size: 1rem;
	}
`;

export const LinkButton = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	padding: 0.5em 1em;
	border-radius: 1em;
	background-color: ${({ theme }) => theme.colors.primary[600]};
	color: ${({ theme }) => theme.colors.white};
	text-decoration: none;
`;

// Detail Contents

export const DetailContentsWrapper = styled.article`
	line-height: 1.5;
	white-space: pre-wrap;
`;

export const DescriptionTitle = styled.h3`
	margin-bottom: 1.5vh;
	font-size: 1.125rem;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Description = styled.p`
	font-size: 1rem;
	margin-bottom: 2vh;
`;
