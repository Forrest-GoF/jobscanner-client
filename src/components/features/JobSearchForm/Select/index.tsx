import { useState } from 'react';
import * as S from './styled';
import { ArrowDownIcon } from '@/assets/images/icons';

type Props = {
	placeholder: string;
	dropdownItems: Array<{ id: number; label: string; name: string; value: string }>;
	selectedValue: string;
	backgroundColor: string;
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
			<S.SelectButton
				type="button"
				onClick={() => setIsVisibleDropdown(!isVisibleDropdown)}
				backgroundColor={props.backgroundColor}
			>
				{props.placeholder}
				<img src={ArrowDownIcon} alt={`${props.placeholder} 필터링 펼치기 버튼`} />
			</S.SelectButton>
			<S.Dropdown show={isVisibleDropdown}>
				{props.dropdownItems?.map((dropdownItem) => {
					return (
						<S.DropdownItemWrapper key={dropdownItem.id} onClick={() => setIsVisibleDropdown(false)}>
							<S.DropdownRadioInput
								id={`${dropdownItem.name}-${dropdownItem.id}`}
								type="radio"
								name={dropdownItem.name}
								value={dropdownItem.value}
								checked={dropdownItem.value === props.selectedValue}
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
