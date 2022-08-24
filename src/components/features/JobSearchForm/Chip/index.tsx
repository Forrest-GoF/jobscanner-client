import { useRef } from 'react';
import * as S from './styled';

type Props = {
	filterKey: string;
	filterValue: string;
	onChipDelete: (key: string, value: string) => void;
} & React.PropsWithChildren;

const Chip = (props: Props) => {
	const handleRemoveChipButtonClick = () => {
		const { filterKey, filterValue } = props;
		props.onChipDelete(filterKey, filterValue);
	};

	return (
		<S.Container onClick={handleRemoveChipButtonClick}>
			<S.InnerWrapper>
				<span>{props.children}</span>
				<S.ChipDeleteButtton type="button">X</S.ChipDeleteButtton>
			</S.InnerWrapper>
		</S.Container>
	);
};

export default Chip;
