import React from 'react';
import * as S from './styled';
import { Props } from './type';

const Chip = ({ children, ...props }: Props) => {
	return (
		<S.Container {...props}>
			<S.Wrapper>{children}</S.Wrapper>
		</S.Container>
	);
};

export default Chip;
