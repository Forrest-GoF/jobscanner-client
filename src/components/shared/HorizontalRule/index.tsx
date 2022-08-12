import React from 'react';
import * as S from './styled';
import { Props } from './type';

const HorizontalRule = (props: Props) => {
	return <S.Horizon borderWidth={props.borderWidth} />;
};

export default HorizontalRule;
