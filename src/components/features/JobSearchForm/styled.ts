import styled from '@emotion/styled';

export const Container = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

export const InputsWrapper = styled.div`
	display: flex;
	width: 100%;
	min-height: 60px;
	margin-bottom: 20px;
`;

export const SelectWrapper = styled.div`
	flex: 4;
	display: flex;
	gap: 0.6em;

	& > div:nth-of-type(1) {
		min-width: 130px;
	}

	& > div:nth-of-type(2) {
		min-width: 130px;
	}

	& > div:nth-of-type(3) {
		min-width: 170px;
	}

	& > div:nth-of-type(4) {
		min-width: 150px;
	}
`;

export const SelectedFilterChips = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.5em;
	height: 40px;
	margin-bottom: 70px;
	font-size: 0.875rem;
`;

export const SelectedFilterResetButton = styled.button`
	display: flex;
	align-items: center;
	gap: 0.4em;
	padding: 0.25em 0.5em;
	border: none;
	border-radius: 4px;
	background: none;
	font-size: 0.875rem;
	cursor: pointer;
`;
