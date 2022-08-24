import { useState, useEffect } from 'react';
import Input from './Input';
import Select from './Select';
import Chip from './Chip';
import * as S from './styled';
import { JOB_SEARCH_SELECT_ITEMS } from '@/constants/job';

type Props = {
	onJobSearchQueryStringChange: (queryString: string) => void;
};

const JobSearchForm = (props: Props) => {
	const [selectedFilter, setSelectedFilter] = useState({
		keywords: [],
		type: '',
		minEmployees: '',
		minSalary: '',
		sortedBy: '',
	});

	const handleKeywordChange = (key: string, value: string) => {
		const newKeywords = Array.from(new Set([...selectedFilter.keywords, value]));
		setSelectedFilter({ ...selectedFilter, [key]: newKeywords });
	};

	const handleSelectFilterChange = (key: string, value: string) => {
		setSelectedFilter({ ...selectedFilter, [key]: value });
	};

	const handleChipDelete = (key: string, value: string) => {
		if (key === 'keywords') {
			const filteredKeywords = selectedFilter.keywords.filter((keyword) => keyword !== value);
			setSelectedFilter({ ...selectedFilter, [key]: filteredKeywords });
			return;
		}

		setSelectedFilter({ ...selectedFilter, [key]: '' });
	};

	const handleSelectedFilterReset = () => {
		setSelectedFilter({
			keywords: [],
			type: '',
			minEmployees: '',
			minSalary: '',
			sortedBy: '',
		});
	};

	const getFilterQueryString = () => {
		const vaildFilterObj = Object.keys(selectedFilter)
			.filter((filterKey) => selectedFilter[filterKey].length > 0)
			.reduce((acc, filterKey) => ({ ...acc, [filterKey]: selectedFilter[filterKey] }), {});

		const queryString = Object.entries(vaildFilterObj)
			.map((e) => e.join('='))
			.join('&');

		return queryString;
	};

	useEffect(() => {
		const queryString = getFilterQueryString();
		props.onJobSearchQueryStringChange(queryString);
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
							selectedValue={selectedFilter[selectItem.dropdownItems[0]?.name]}
							onSelectFilterChange={handleSelectFilterChange}
						/>
					);
				})}
			</S.SelectWrapper>
			<S.SelectedFilterChips>
				{selectedFilter.keywords?.map((keyword, idx) => {
					return (
						<Chip key={idx} filterKey="keywords" filterValue={keyword} onChipDelete={handleChipDelete}>
							{keyword}
						</Chip>
					);
				})}
				{selectedFilter.type && (
					<Chip filterKey={'type'} filterValue={selectedFilter.type} onChipDelete={handleChipDelete}>
						{selectedFilter.type && `${selectedFilter.type}`}
					</Chip>
				)}
				{selectedFilter.minEmployees && (
					<Chip filterKey="minEmployees" filterValue={selectedFilter.minEmployees} onChipDelete={handleChipDelete}>
						{selectedFilter.minEmployees}명 이상
					</Chip>
				)}
				{selectedFilter.minSalary && (
					<Chip filterKey="minSalary" filterValue={selectedFilter.minSalary} onChipDelete={handleChipDelete}>
						{selectedFilter.minSalary}원 이상
					</Chip>
				)}
				{selectedFilter.sortedBy && (
					<Chip filterKey="sortedBy" filterValue={selectedFilter.sortedBy} onChipDelete={handleChipDelete}>
						{selectedFilter.sortedBy === 'POSTED' ? '최신순' : '마감순'}
					</Chip>
				)}
				<S.SelectedFilterResetButton type="button" onClick={handleSelectedFilterReset}>
					전체 초기화
				</S.SelectedFilterResetButton>
			</S.SelectedFilterChips>
		</S.Container>
	);
};

export default JobSearchForm;
