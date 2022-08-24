import React, { useState, useEffect } from 'react';
import Input from './Input';
import Select from './Select';
import Chip from './Chip';
import * as S from './styled';
import { JOB_SEARCH_SELECT_ITEMS } from '@/constants/job';

const JobSearchForm = () => {
	const [selectedFilter, setSelectedFilter] = useState({
		keywords: [],
		minCareer: '',
		minEmployees: '',
		minSalary: '',
		enrollDay: '',
	});

	const handleKeywordChange = (key: string, value: string) => {
		const newKeywords = Array.from(new Set([...selectedFilter.keywords, value]));
		setSelectedFilter({ ...selectedFilter, [key]: newKeywords });
	};

	const handleSelectFilterChange = (key: string, value: string) => {
		setSelectedFilter({ ...selectedFilter, [key]: value });
	};

	useEffect(() => {
		console.log(selectedFilter);
	}, [selectedFilter]);

	return (
		<S.Container>
			<S.InputWrapper>
				<Input placeholder="기술 스택 검색" onKeywordChange={handleKeywordChange} />
			</S.InputWrapper>
			<S.SelectWrapper>
				{JOB_SEARCH_SELECT_ITEMS.map((selectItem) => {
					return (
						<Select
							key={selectItem.id}
							placeholder={selectItem.placeholder}
							dropdownItems={selectItem.dropdownItems}
							onSelectFilterChange={handleSelectFilterChange}
						/>
					);
				})}
			</S.SelectWrapper>
			<S.SelectedFilterChips>
				{selectedFilter.keywords?.map((keyword, idx) => {
					return (
						<Chip key={idx} onRemoveChip={() => {}}>
							{keyword}
						</Chip>
					);
				})}
				{selectedFilter.minCareer && (
					<Chip onRemoveChip={() => {}}>
						{selectedFilter.minCareer === '0' ? '신입' : `${selectedFilter.minCareer}년 경력`}
					</Chip>
				)}
				{selectedFilter.minEmployees && <Chip onRemoveChip={() => {}}>{selectedFilter.minEmployees}명 이상</Chip>}
				{selectedFilter.minSalary && <Chip onRemoveChip={() => {}}>{selectedFilter.minSalary}원 이상</Chip>}
				{selectedFilter.enrollDay && (
					<Chip onRemoveChip={() => {}}>{selectedFilter.enrollDay === '0' ? '최신순' : '마감순'}</Chip>
				)}
			</S.SelectedFilterChips>
		</S.Container>
	);
};

export default JobSearchForm;
