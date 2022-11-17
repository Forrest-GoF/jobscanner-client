import styled from '@emotion/styled';

type StyledChipProps = {
	bgColor?: string;
};

export const Container = styled.div<StyledChipProps>`
	padding: 0.6em 1em;
	border-radius: 1em;
	background-color: ${({ bgColor }) => bgColor};

	& > div > span {
		margin-right: 0.25em;
		color: ${({ color }) => color};
		opacity: 1;
	}

	& > div > button {
		background-color: ${({ bgColor }) => bgColor};

		& > svg {
			fill: ${({ color }) => color};
			opacity: 0.5;
		}

		& > svg:hover {
			opacity: 1;
		}
	}
`;

export const InnerWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

export const ChipDeleteButtton = styled.button`
	display: flex;
	padding: 0;
	border: none;
	font-size: 1.5rem;
	background-color: none;
	cursor: pointer;
`;
