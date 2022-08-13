import * as S from './styled';
import { Props } from './type';

const LinkButton = ({ to, target, rel, children, ...props }: Props) => {
	return (
		<S.Container {...props}>
			<S.LinkButton to={to} target={target} rel={rel}>
				{children}
			</S.LinkButton>
		</S.Container>
	);
};

export default LinkButton;
