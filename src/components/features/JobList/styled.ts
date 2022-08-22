import styled from '@emotion/styled';

export const Container = styled.div`
	max-height: calc(100% - 90px);
	padding: 16px 20px;
	overflow-y: auto;
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 16px;
`;
