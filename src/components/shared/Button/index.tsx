import React from 'react';
import * as S from './styled';
import { Props } from './type';

const Button = ({ type, disabled, onClick, children, ...props }: Props) => {
	return (
		<S.Container {...props}>
			<S.Button type={type} disabled={disabled} onClick={onClick}>
				{children}
			</S.Button>
		</S.Container>
	);
};

export default Button;
