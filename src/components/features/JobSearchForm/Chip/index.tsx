import * as S from './styled';
import { CloseIcon } from '@/assets/images/icons';

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
					<img src={CloseIcon} alt="필터링 아이템 삭제 버튼" />
				</S.ChipDeleteButtton>
			</S.InnerWrapper>
		</S.Container>
	);
};

export default Chip;
