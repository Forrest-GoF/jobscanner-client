import styled from '@emotion/styled';

export const Container = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	height: 170px;
	padding: 1em;
`;

export const InputWrapper = styled.div``;

export const SelectWrapper = styled.div`
	display: flex;
	gap: 0.5em;
`;

export const SelectedFilterChips = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.5em;
	height: 40px;
`;

export const SelectedFilterResetButton = styled.button`
	padding: 0.25em 0.5em;
	border: none;
	border-radius: 4px;
	font-size: 1rem;
	cursor: pointer;

	&:hover {
		color: red;
		background-color: rgba(255, 0, 0, 0.1);
	}
`;
