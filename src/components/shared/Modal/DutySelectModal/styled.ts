import styled from '@emotion/styled';

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 50%;
	max-width: 50%;
	min-height: 50%;
	padding: 2em;
	border-radius: 1.5em;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const ModalTopWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2em;

	& > button {
		border: none;
		background-color: ${({ theme }) => theme.colors.white};
		cursor: pointer;

		& > img {
			border: 1px solid ${({ theme }) => theme.colors.black};
			border-radius: 50%;
			transform: scale(2);
		}
	}
`;

export const Title = styled.h2`
	font-size: 1.2rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const DutySelectWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.3em;
	margin-bottom: 2em;
	word-break: keep-all;
`;

export const DutySelect = styled.span`
	display: flex;

	& > label {
		padding: 0.5em;
		border: 1px solid ${({ theme }) => theme.colors.primary[600]};
		border-radius: 1em;
		cursor: pointer;
	}

	& > input[type='checkbox'] {
		display: none;

		&:checked + label {
			background-color: ${({ theme }) => theme.colors.primary[600]};
			color: ${({ theme }) => theme.colors.white};
		}

		&:disabled + label {
			border: 1px solid ${({ theme }) => theme.colors.grey[300]};
			background-color: ${({ theme }) => theme.colors.grey[300]};
			opacity: 0.9;
			cursor: not-allowed;
		}
	}
`;

export const SelectedItemWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.3em;
	margin: 1em 0 2em 0;
`;

export const SelectedItem = styled.span`
	display: flex;
	align-items: center;
	border: 1px solid ${({ theme }) => theme.colors.primary[600]};
	border-radius: 1em;
	padding: 0.5em;
	background-color: ${({ theme }) => theme.colors.primary[200]};

	& > button {
		display: flex;
		margin-left: 0.25em;
		border: none;
		background: none;
		cursor: pointer;

		& > img {
			border: 1px solid ${({ theme }) => theme.colors.grey[500]};
			border-radius: 50%;
		}
	}
`;

export const SelectedItemEmpty = styled.span``;

export const ModalButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: auto;
	gap: 0.5em;
`;

export const ModalButton = styled.button`
	padding: 0.5em 2em;
	border-radius: 0.5em;
	cursor: pointer;
`;

export const ModalCloseButton = styled(ModalButton)`
	border: 1px solid ${({ theme }) => theme.colors.primary[600]};
	background-color: ${({ theme }) => theme.colors.white};
`;

export const ModalDispatchButton = styled(ModalButton)`
	border: none;
	background-color: ${({ theme }) => theme.colors.primary[600]};
	color: ${({ theme }) => theme.colors.white};
`;
