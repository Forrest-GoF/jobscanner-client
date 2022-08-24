import styled from '@emotion/styled';

export const Container = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	margin: 0.5em 1em;
`;

export const InputWrapper = styled.div``;

export const SelectWrapper = styled.div`
	display: flex;
	gap: 0.5em;
`;

export const SelectedFilterChips = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5em;
`;

export const SelectedFilterResetButton = styled.button`
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		color: red;
		background-color: rgba(255, 0, 0, 0.1);
	}
`;
