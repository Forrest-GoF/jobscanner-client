import * as S from './styled';
import { Props } from './type';

const LinkButton = ({ href, target, rel, children, ...props }: Props) => {
	return (
		<S.Container {...props}>
			<S.LinkButton href={href} target={target} rel={rel}>
				{children}
			</S.LinkButton>
		</S.Container>
	);
};

export default LinkButton;
