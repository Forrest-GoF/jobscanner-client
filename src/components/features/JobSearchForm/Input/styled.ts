import styled from '@emotion/styled';

export const Container = styled.div`
	flex: 8;
	position: relative;
	margin-right: 1.2em;
`;

export const Input = styled.input<{ backgroundColor: string }>`
	width: 100%;
	height: 100%;
	padding: 0.3em 0 0.3em 3.5em;
	border: none;
	border-radius: 0.8rem;
	font-size: 1rem;
	background-color: ${({ backgroundColor }) => backgroundColor ?? 'transprant'};
	outline: none;

	& + svg {
		position: absolute;
		top: 17px;
		left: 20px;
		font-size: 1.5rem;
		fill: ${({ theme }) => theme.colors.grey[400]};
	}

	&::placeholder {
		color: ${({ theme }) => theme.colors.grey[500]};
	}

	&:focus {
		border: 1px solid ${({ theme }) => theme.colors.primary[700]};

		& + svg {
			fill: ${({ theme }) => theme.colors.primary[700]};
		}
	}
`;

export const AutoCompleteWrapper = styled.div`
	position: absolute;
	top: 64px;
	width: 100%;
	max-height: 230px;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0 0.25rem 0.5rem rgb(20 20 84 / 4%), 0 0.5rem 1.125rem rgb(20 20 84 / 8%),
		0 1rem 2rem -0.125rem rgb(20 20 84 / 8%), 0 0 0 0.0625rem rgb(20 20 84 / 12%);
	overflow-y: scroll;
	z-index: 1000;
`;

export const AutoCompleteList = styled.ul`
	padding: 0.5rem;
`;

export const AutoCompleteItem = styled.li`
	padding: 1rem;
	border-radius: 0.5rem;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary[200]};
	}
`;

export const EmptyAutoCompleteItem = styled.li`
	padding: 1rem;
	border-radius: 0.5rem;
`;
