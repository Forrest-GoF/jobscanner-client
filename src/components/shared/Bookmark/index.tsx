import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import * as Sentry from '@sentry/react';
import * as S from './styled';
import { updateJobBookmark } from '@/apis/job';
import { RESPONSE_SUCCESS_CREATED } from '@/constants/api';
import { BookmarkOffIcon, BookmarkOnIcon } from '@/assets/images/icons';

type Props = {
	jobId: number;
	bookmarkActivated: boolean;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
};

const Bookmark = ({ jobId, bookmarkActivated, ...props }: Props) => {
	const [bookmarkToggle, setBookmarkToggle] = useState(bookmarkActivated);

	const { mutate: bookmarkMutation } = useMutation(() => updateJobBookmark(jobId, !bookmarkActivated), {
		onSuccess: (data) => {
			if (data.status === RESPONSE_SUCCESS_CREATED) {
				setBookmarkToggle(!bookmarkToggle);
			}
		},
		onError: (error) => {
			Sentry.captureException(error);
		},
	});

	const onBookmarkClick = () => {
		bookmarkMutation();
	};

	return (
		<S.BookmarkButton onClick={onBookmarkClick} {...props}>
			{bookmarkToggle ? (
				<img src={BookmarkOnIcon} alt="북마크 활성화" />
			) : (
				<img src={BookmarkOffIcon} alt="북마크 비활성화" />
			)}
		</S.BookmarkButton>
	);
};

export default Bookmark;
