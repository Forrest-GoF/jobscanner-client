import * as S from './styled';
import { RiStackLine } from 'react-icons/ri';
import { useQuery } from '@tanstack/react-query';
import { getTechTags } from '@/apis/tag';
import { useEffect, useState } from 'react';

type Props = {
	placeholder: string;
	onKeywordChange: (key: string, value: string) => void;
};

const Input = (props: Props) => {
	const [keyword, setKeyword] = useState('');
	const [autocompleteItems, setAutoCompleteItems] = useState<string[]>();

	const { data: tags } = useQuery(['getTechTags'], getTechTags);

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
				onChange={handleKeywordInputChange}
			/>
			<RiStackLine />
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
