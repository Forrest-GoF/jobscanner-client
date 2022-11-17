import styled from '@emotion/styled';

type BookmarkStyledProps = {
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
};

export const BookmarkButton = styled.button<BookmarkStyledProps>`
	position: absolute;
	top: ${({ top }) => top};
	right: ${({ right }) => right};
	bottom: ${({ bottom }) => bottom};
	left: ${({ left }) => left};
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background: none;
	cursor: pointer;
`;
