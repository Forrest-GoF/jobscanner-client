import styled from '@emotion/styled';

export const Container = styled.div`
	max-height: calc(100% - 240px);
	padding: 16px;
	overflow-y: auto;
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 16px;

	@media only screen and (min-width: 120rem) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
