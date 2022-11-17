import styled from '@emotion/styled';

export const Container = styled.div`
	position: relative;
	flex: 1;
`;

export const SelectButton = styled.button<{ backgroundColor: string }>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	padding: 1em 1.5em;
	border: none;
	border-radius: 0.8rem;
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	text-align: left;
	color: ${({ theme }) => theme.colors.grey[500]};
	background-color: ${({ backgroundColor }) => backgroundColor ?? 'transparent'};
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.grey[100]};
	}
`;

export const Dropdown = styled.div<{ show: boolean }>`
	position: absolute;
	display: ${({ show }) => (show ? 'block' : 'none')};
	padding: 1rem;
	width: 100%;
	margin-top: 4px;
	border-radius: 0.25em;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0 0.25rem 0.5rem rgb(20 20 84 / 4%), 0 0.5rem 1.125rem rgb(20 20 84 / 8%),
		0 1rem 2rem -0.125rem rgb(20 20 84 / 8%), 0 0 0 0.0625rem rgb(20 20 84 / 12%);
	z-index: 1000;
`;

export const DropdownItemWrapper = styled.div`
	display: flex;
`;

export const DropdownRadioInput = styled.input`
	cursor: pointer;
`;

export const DropdownRadioInputLabel = styled.label`
	width: 100%;
	cursor: pointer;
	font-size: 0.875rem;

	&:hover {
		color: ${({ theme }) => theme.colors.primary[700]};
	}
`;
