import styled from '@emotion/styled';

type StyledDropdownProps = {
	show: boolean;
};

export const Container = styled.div`
	position: relative;
	flex: 1;
`;

export const SelectButton = styled.button`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0.3rem 0.8rem;
	border: 1px solid ${({ theme }) => theme.colors.grey[400]};
	border-radius: 0.25em;
	font-size: 1.1rem;
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	text-align: left;
	background-color: transparent;
	cursor: pointer;

	&:after {
		content: '';
		display: inline-block;
		margin-left: 0.255em;
		vertical-align: 0.255em;
		border-top: 0.3em solid;
		border-right: 0.3em solid transparent;
		border-bottom: 0;
		border-left: 0.3em solid transparent;
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.grey[100]};
	}
`;

export const Dropdown = styled.div<StyledDropdownProps>`
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

export const DropdownItemWrapper = styled.div``;

export const DropdownRadioInput = styled.input`
	cursor: pointer;
`;

export const DropdownRadioInputLabel = styled.label`
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.primary[700]};
	}
`;
