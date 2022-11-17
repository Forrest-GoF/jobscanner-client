import styled from '@emotion/styled';

export const Container = styled.main`
	position: relative;
`;

export const InnerContainer = styled.div`
	max-width: ${({ theme }) => theme.maxWidth};
	margin: 0 auto;
	padding: 3em;
`;

export const Title = styled.h2`
	margin-bottom: 1em;
	font-size: 2em;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const MyBookmarksWrapper = styled.div`
	margin-top: 1em;
`;

export const MyBookmarkList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 33.33333%);
	gap: 0.5em;
`;

export const MyBookmarkListItem = styled.li`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 1.5em;
	border-radius: 0.5em;
	background-color: ${({ theme }) => theme.colors.grey[100]};
`;

export const BookmarkThumbnailImage = styled.img`
	width: 4em;
	height: 4em;
	margin-bottom: 1em;
	border-radius: 1em;
	object-fit: fill;
`;

export const BookmarkTitle = styled.p`
	width: calc(100% - 1px);
	max-width: 100%;
	margin-bottom: 0.5em;
	font-size: 1.2rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const BookmarkCompanyName = styled.span``;
