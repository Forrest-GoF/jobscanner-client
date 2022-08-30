import styled from '@emotion/styled';

export const Container = styled.div`
	height: calc(100vh - 70px);
	padding: 1em;
	overflow-y: auto;
`;

export const DetailIntro = styled.div`
	padding: 2vh 2vw;
	margin-bottom: 2vh;
	font-size: 1.7vw;
	white-space: pre-wrap;
	color: ${({ theme }) => theme.colors.grey[500]};
	-webkit-box-shadow: 0 5px 10px rgb(30 32 37 / 12%);
	box-shadow: 0 5px 10px rgb(30 32 37 / 12%);
`;

export const JobTitle = styled.h2`
	margin-bottom: 6px;
	font-weight: ${({ theme }) => theme.fontWeight.strongBold};
	color: ${({ theme }) => theme.colors.black};
`;

export const CompanyName = styled.p`
	margin-bottom: 6px;
	font-size: 0.7em;
	color: ${({ theme }) => theme.colors.black};
`;

export const ApplyPeriod = styled.p`
	margin-bottom: 10px;
	font-size: 0.7em;
	color: ${({ theme }) => theme.colors.black};

	& > strong {
		color: ${({ theme }) => theme.colors.primary[800]};
	}
`;

export const Location = styled.p`
	margin-bottom: 6px;
	font-size: 0.7em;
`;

export const SubInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	margin-bottom: 6px;
	font-size: 0.7em;
`;

export const SubInfoItemWrapper = styled.span`
	display: flex;
	align-items: center;

	& > svg > path {
		stroke: ${({ theme }) => theme.colors.grey[500]};
	}
`;

export const ButtonWrapper = styled.div`
	position: relative;
	display: flex;
	gap: 8px;
	height: 4vh;
	margin-top: 2vh;
`;

export const DetailDescription = styled.div`
	padding: 2vh 2vw;
	font-size: 1.5vw;
	white-space: pre-wrap;
	-webkit-box-shadow: 0 5px 10px rgb(30 32 37 / 12%);
	box-shadow: 0 5px 10px rgb(30 32 37 / 12%);
`;

export const DescriptionTitle = styled.h5`
	margin-bottom: 1.5vh;
	font-size: 1em;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const DescriptionItemWrapper = styled.div`
	font-size: 0.7em;
	margin-bottom: 2vh;
`;

export const TechStacksWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const TechStacks = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 10px 8px;
	font-size: 0.7em;
`;
