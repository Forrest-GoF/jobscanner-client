import * as S from './styled';
import { Props } from './type';

const Button = ({ type, disabled, padding, children, onClick, ...props }: Props) => {
	return (
		<S.Container {...props}>
			<S.Button type={type} disabled={disabled} padding={padding} onClick={onClick}>
				{children}
			</S.Button>
		</S.Container>
	);
};

export default Button;
