import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as S from './styled';
import { getTechTags } from '@/apis/tag';
import { SearchIcon } from '@/components';

type Props = {
	placeholder: string;
	onKeywordChange: (key: string, value: string) => void;
};

const Input = (props: Props) => {
	const [keyword, setKeyword] = useState('');
	const [autocompleteItems, setAutoCompleteItems] = useState<string[]>();

	const { data: tags } = useQuery(['getTechTags'], () => getTechTags(), {
		refetchInterval: false,
		retry: 1,
	});

	const handleSearchedKeywordClick = (event: React.MouseEvent<HTMLLIElement>) => {
		if (!event.currentTarget.textContent) return;

		const clickedKeyword = event.currentTarget.textContent;
		props.onKeywordChange('tags', clickedKeyword);
		handleKeywordInputReset();
	};

	const handleKeywordInputReset = () => {
		setKeyword('');
	};

	const handleKeywordInputChange = (event: React.FormEvent<HTMLInputElement>) => {
		setKeyword(event.currentTarget.value);
	};

	useEffect(() => {
		setAutoCompleteItems(
			keyword ? tags?.filter((tag) => tag.toUpperCase().includes(keyword.toUpperCase())) : undefined,
		);
	}, [keyword]);

	return (
		<S.Container>
			<S.Input
				type="text"
				placeholder={props.placeholder}
				name="tags"
				value={keyword}
				autoComplete="off"
				backgroundColor="#D4DEFF"
				onChange={handleKeywordInputChange}
			/>
			<SearchIcon stroke="#7197EF" />
			{autocompleteItems && (
				<S.AutoCompleteWrapper>
					<S.AutoCompleteList>
						{autocompleteItems.length > 0 ? (
							autocompleteItems.map((autocompleteItem, idx) => {
								return (
									<S.AutoCompleteItem key={idx} onClick={handleSearchedKeywordClick}>
										{autocompleteItem}
									</S.AutoCompleteItem>
								);
							})
						) : (
							<S.EmptyAutoCompleteItem>검색 결과가 존재하지 않습니다.</S.EmptyAutoCompleteItem>
						)}
					</S.AutoCompleteList>
				</S.AutoCompleteWrapper>
			)}
		</S.Container>
	);
};

export default Input;
