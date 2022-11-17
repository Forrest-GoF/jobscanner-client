import * as S from './styled';
import { useQuery } from '@tanstack/react-query';
import { getTechTags } from '@/apis/tag';
import { useState, useEffect } from 'react';

type Props = {
	isDisabled: boolean;
	placeholder: string;
	autoCompleteEmptyMessage: React.ReactNode | string;
	onAutoCompleteItemClick: (clickedItem: string) => void;
};

const TechTagInput = (props: Props) => {
	const [isFocused, setIsFocused] = useState(false);
	const [keyword, setKeyword] = useState('');
	const [matchedTechTags, setMatchedTechTags] = useState<string[]>([]);
	const { data: techTags } = useQuery<string[]>(['getTechTags', isFocused], () => getTechTags(), {
		enabled: isFocused,
	});

	const onKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(event.currentTarget.value);
	};

	const handleAutoCompleteItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
		if (event.currentTarget.textContent) {
			props.onAutoCompleteItemClick(event.currentTarget.textContent);
			setKeyword('');
			setIsFocused(false);
		}
	};

	useEffect(() => {
		if (techTags instanceof Array<string>) {
			setMatchedTechTags(techTags?.filter((techTag) => techTag.toLowerCase().startsWith(keyword.toLowerCase())).sort());
		}
	}, [keyword]);

	return (
		<S.Container>
			<S.Input
				type="text"
				value={keyword}
				placeholder={props.placeholder}
				disabled={props.isDisabled}
				onFocus={() => setIsFocused(true)}
				onChange={onKeywordChange}
			/>
			<S.AutoCompleteWrapper show={isFocused}>
				{matchedTechTags?.length !== 0 ? (
					matchedTechTags?.map((matchedTechTag, idx) => (
						<S.AutoCompleteItem key={`${matchedTechTag}-${idx}`} onClick={handleAutoCompleteItemClick}>
							{matchedTechTag}
						</S.AutoCompleteItem>
					))
				) : (
					<S.AutoCompleteEmpty>{props.autoCompleteEmptyMessage}</S.AutoCompleteEmpty>
				)}
			</S.AutoCompleteWrapper>
		</S.Container>
	);
};

export default TechTagInput;
