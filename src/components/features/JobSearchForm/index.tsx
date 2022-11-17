import { useState, useEffect } from 'react';
import { SearchInput, SearchDropdown , SearchFilterChip, ResetIcon } from '@/components'
import * as S from './styled';
import { JOB_SEARCH_SELECT_ITEMS } from '@/constants/job';
import { theme } from '@/styles';

type Props = {
	onJobSearchQueryStringChange: (queryString: string) => void;
};

const JobSearchForm = (props: Props) => {
	const [selectedFilter, setSelectedFilter] = useState<{
		[key: string]: any;
		tags: string[];
		type: string;
		minEmployees: string;
		minSalary: string;
		sortedBy: string;
	}>({
		tags: [],
		type: '',
		minEmployees: '',
		minSalary: '',
		sortedBy: '',
	});

	const { colors } = theme;

	const handleKeywordChange = (key: string, value: string) => {
		const newKeywords = Array.from(new Set([...selectedFilter.tags, value]));
		setSelectedFilter({ ...selectedFilter, [key]: newKeywords });
	};

	const handleSelectFilterChange = (key: string, value: string) => {
		setSelectedFilter({ ...selectedFilter, [key]: value });
	};

	const handleChipDelete = (key: string, value: string) => {
		if (key === 'tags') {
			const filteredTags = selectedFilter.tags.filter((tag) => tag !== value);
			setSelectedFilter({ ...selectedFilter, [key]: filteredTags });
			return;
		}

		setSelectedFilter({ ...selectedFilter, [key]: '' });
	};

	const handleSelectedFilterReset = () => {
		setSelectedFilter({
			tags: [],
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

	const isSelectedSomeFilter = () => {
		return Object.values(selectedFilter).some((val) => val.length > 0);
	};

	useEffect(() => {
		const queryString = getFilterQueryString();
		props.onJobSearchQueryStringChange(queryString);
	}, [selectedFilter]);

	return (
		<S.Container>
			<S.InputsWrapper>
				<SearchInput placeholder="기술 스택 검색" onKeywordChange={handleKeywordChange} />
				<S.SelectWrapper>
					{JOB_SEARCH_SELECT_ITEMS.map((selectItem) => {
						return (
							<SearchDropdown
								key={selectItem.id}
								placeholder={selectItem.placeholder}
								dropdownItems={selectItem.dropdownItems}
								selectedValue={selectedFilter[selectItem.dropdownItems[0]?.name]}
								backgroundColor={theme.colors.blue[100]}
								onSelectFilterChange={handleSelectFilterChange}
							/>
						);
					})}
				</S.SelectWrapper>
			</S.InputsWrapper>

			{isSelectedSomeFilter() && (
				<S.SelectedFilterChips>
					{selectedFilter.tags?.map((tag, idx) => {
						return (
							<SearchFilterChip
								key={idx}
								color={`${colors.primary[800]}`}
								bgColor={`${colors.primary[300]}`}
								filterKey="tags"
								filterValue={tag}
								onChipDelete={handleChipDelete}
							>
								{tag}
							</SearchFilterChip>
						);
					})}
					{selectedFilter.type && (
						<SearchFilterChip
							color={`${colors.blue[400]}`}
							bgColor={`${colors.blue[200]}`}
							filterKey={'type'}
							filterValue={selectedFilter.type}
							onChipDelete={handleChipDelete}
						>
							{selectedFilter.type && `${selectedFilter.type}`}
						</SearchFilterChip>
					)}
					{selectedFilter.minEmployees && (
						<SearchFilterChip
							color={`${colors.green[200]}`}
							bgColor={`${colors.green[100]}`}
							filterKey="minEmployees"
							filterValue={selectedFilter.minEmployees}
							onChipDelete={handleChipDelete}
						>
							{selectedFilter.minEmployees}명 이상
						</SearchFilterChip>
					)}
					{selectedFilter.minSalary && (
						<SearchFilterChip
							color={`${colors.orange[200]}`}
							bgColor={`${colors.yellow[100]}`}
							filterKey="minSalary"
							filterValue={selectedFilter.minSalary}
							onChipDelete={handleChipDelete}
						>
							{selectedFilter.minSalary}원 이상
						</SearchFilterChip>
					)}
					{selectedFilter.sortedBy && (
						<SearchFilterChip
							color={`${colors.grey[500]}`}
							bgColor={`${colors.grey[200]}`}
							filterKey="sortedBy"
							filterValue={selectedFilter.sortedBy}
							onChipDelete={handleChipDelete}
						>
							{selectedFilter.sortedBy === 'POSTED' ? '최신순' : '마감순'}
						</SearchFilterChip>
					)}

					<S.SelectedFilterResetButton type="button" onClick={handleSelectedFilterReset}>
						<ResetIcon />
						전체 초기화
					</S.SelectedFilterResetButton>
				</S.SelectedFilterChips>
			)}
		</S.Container>
	);
};

export default JobSearchForm;
