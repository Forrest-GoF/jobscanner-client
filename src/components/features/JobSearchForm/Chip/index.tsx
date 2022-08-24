import { useRef } from 'react';
import * as S from './styled';
import { IoIosCloseCircleOutline } from 'react-icons/io';

type Props = {
	color: string;
	bgColor: string;
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
		<S.Container color={props.color} bgColor={props.bgColor} onClick={handleRemoveChipButtonClick}>
			<S.InnerWrapper>
				<span>{props.children}</span>
				<S.ChipDeleteButtton type="button">
					<IoIosCloseCircleOutline />
				</S.ChipDeleteButtton>
			</S.InnerWrapper>
		</S.Container>
	);
};

export default Chip;
