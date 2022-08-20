import * as S from './styled';
import { Props } from './type';

const LinkButton = ({ href, target, rel, padding, children, ...props }: Props) => {
	return (
		<S.Container {...props}>
			<S.LinkButton href={href} target={target} rel={rel} padding={padding}>
				{children}
			</S.LinkButton>
		</S.Container>
	);
};

export default LinkButton;
