import React from 'react';
import Input from './Input';
import Select from './Select';
import * as S from './styled';

const JobSearchForm = () => {
	return (
		<S.Container>
			<S.InputWrapper>
				<Input />
			</S.InputWrapper>
			<S.SelectWrapper>
				<Select />
				<Select />
				<Select />
				<Select />
			</S.SelectWrapper>
		</S.Container>
	);
};

export default JobSearchForm;
