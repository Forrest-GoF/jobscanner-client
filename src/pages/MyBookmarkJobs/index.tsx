import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Layout, Bookmark } from '@/components';
import * as S from './styled';
import { getBookmarkJobs } from '@/apis/job';

const MyBookmarkJobs = () => {
	const navigator = useNavigate();
	const { data: bookmarkJobs } = useQuery(['getBookmarkJobs'], () => getBookmarkJobs());

	const onMyBookmarkJobClick = (jobId: number) => {
		navigator(`/jobs/${jobId}`);
	};

	return (
		<Layout>
			<S.Container>
				<S.InnerContainer>
					<S.Title>북마크</S.Title>

					<S.MyBookmarksWrapper>
						<S.MyBookmarkList>
							{bookmarkJobs?.map((bookmarkJob) => {
								return (
									<S.MyBookmarkListItem key={bookmarkJob.id} onClick={() => onMyBookmarkJobClick(bookmarkJob.id)}>
										<S.BookmarkThumbnailImage src={bookmarkJob.companyThumbnail} alt="" />
										<S.BookmarkTitle>{bookmarkJob.title}</S.BookmarkTitle>
										<S.BookmarkCompanyName>{bookmarkJob.companyName}</S.BookmarkCompanyName>
										<Bookmark
											jobId={bookmarkJob.id}
											bookmarkActivated={bookmarkJob.bookmarkActivated}
											top="1em"
											right="1em"
										/>
									</S.MyBookmarkListItem>
								);
							})}
						</S.MyBookmarkList>
					</S.MyBookmarksWrapper>
				</S.InnerContainer>
			</S.Container>
		</Layout>
	);
};

export default MyBookmarkJobs;
