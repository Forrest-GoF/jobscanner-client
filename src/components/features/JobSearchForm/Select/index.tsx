import { useState } from 'react';
import * as S from './styled';

type Props = {
	placeholder: string;
	dropdownItems: Array<{ id: number; label: string; name: string; value: string }>;
	onSelectFilterChange: (key: string, value: string) => void;
};

const Select = (props: Props) => {
	const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);

	const handleFilterSelectClick = (event: React.FormEvent<HTMLInputElement>) => {
		const { name: key, value } = event.currentTarget;
		props.onSelectFilterChange(key, value);
	};

	return (
		<S.Container>
			<S.SelectButton type="button" onClick={() => setIsVisibleDropdown(!isVisibleDropdown)}>
				{props.placeholder}
			</S.SelectButton>
			<S.Dropdown show={isVisibleDropdown}>
				{props.dropdownItems?.map((dropdownItem) => {
					return (
						<S.DropdownItemWrapper key={dropdownItem.id}>
							<S.DropdownRadioInput
								id={`${dropdownItem.name}-${dropdownItem.id}`}
								type="radio"
								name={dropdownItem.name}
								value={dropdownItem.value}
								onChange={handleFilterSelectClick}
							/>
							<S.DropdownRadioInputLabel htmlFor={`${dropdownItem.name}-${dropdownItem.id}`}>
								{dropdownItem.label}
							</S.DropdownRadioInputLabel>
						</S.DropdownItemWrapper>
					);
				})}
			</S.Dropdown>
		</S.Container>
	);
};

export default Select;
