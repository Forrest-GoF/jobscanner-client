import styled from '@emotion/styled';

export const Container = styled.div`
	position: relative;
`;

export const Input = styled.input`
	width: 100%;
	height: 3em;
	padding: 1em;
	border: 1px solid ${({ theme }) => theme.colors.grey[200]};
	border-radius: 0.25em;
	font-size: 1rem;

	&:disabled {
		cursor: not-allowed;
	}
`;

export const AutoCompleteWrapper = styled.ul<{ show: boolean }>`
	position: absolute;
	width: 100%;
	top: 3em;
	display: ${({ show }) => (show ? 'flex' : 'none')};
	flex-direction: column;
	max-height: calc(3em * 4 + 20px);
	border: 1px solid ${({ theme }) => theme.colors.grey[200]};
	border-radius: 0.25em;
	overflow-y: scroll;
	z-index: 101;
`;

export const AutoCompleteItem = styled.li`
	display: flex;
	align-items: center;
	height: 3em;
	padding: 1em;
	background-color: ${({ theme }) => theme.colors.white};
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.grey[200]};
	}
`;

export const AutoCompleteEmpty = styled(AutoCompleteItem)`
	justify-content: center;
	min-height: calc(3em * 4 + 20px);
	text-align: center;
	line-height: 1.5rem;
	cursor: default;

	&:hover {
		background-color: ${({ theme }) => theme.colors.white};
	}
`;
