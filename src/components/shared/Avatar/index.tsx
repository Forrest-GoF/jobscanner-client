import React from 'react';
import * as S from './styled';
import { Props } from './type';
const Avatar = (props: Props) => {
	return (
		<S.Container size={props.size}>
			<S.Image src={props.imgSrc} alt="프로필" />
		</S.Container>
	);
};

export default Avatar;
