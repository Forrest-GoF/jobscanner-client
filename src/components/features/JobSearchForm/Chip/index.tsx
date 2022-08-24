import * as S from './styled';

type Props = {
	onRemoveChip: () => void;
} & React.PropsWithChildren;

const Chip = (props: Props) => {
	const handleRemoveChipButtonClick = (event: React.MouseEvent<HTMLElement>) => {};

	return (
		<S.Container onClick={props.onRemoveChip}>
			<S.InnerWrapper>
				<span>{props.children}</span>
				<S.ChipDeleteButtton type="button">X</S.ChipDeleteButtton>
			</S.InnerWrapper>
		</S.Container>
	);
};

export default Chip;
