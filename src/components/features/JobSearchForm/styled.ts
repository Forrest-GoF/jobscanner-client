import styled from '@emotion/styled';

export const Container = styled.form`
	margin: 0 1rem;
`;

export const InputWrapper = styled.div``;

export const SelectWrapper = styled.div`
	display: flex;
	gap: 8px;
`;

export const SelectedFilterChips = styled.div``;

export const SelectedFilterResetButton = styled.button`
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		color: red;
		background-color: rgba(255, 0, 0, 0.1);
	}
`;
