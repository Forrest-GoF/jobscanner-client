import * as S from './styled';

export type Props = {
	size: string;
	imgSrc: string | undefined;
};

const Avatar = (props: Props) => {
	return (
		<S.Container size={props.size}>
			<S.Image src={props.imgSrc} alt="프로필" />
		</S.Container>
	);
};

export default Avatar;
