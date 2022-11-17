import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getJob } from '@/apis/job';
import Layout from '@/components/layout';
import * as S from './styled';
import { Button, Chip, Bookmark} from '@/components';
import { GrPersonalComputer, GrBriefcase, GrMoney } from 'react-icons/gr';
import { FaUserGraduate } from 'react-icons/fa';
import { SiHandshake } from 'react-icons/si';
import { getDateAgoText } from '@/utils/day';
import { CheckIcon, ClipIcon } from '@/assets/images/icons';

const JobDetail = () => {
	const { jobId } = useParams();
	const [bookmarkToggle, setBookmarkToggle] = useState<boolean>();
	const { data: job } = useQuery(['getJob', bookmarkToggle], () => getJob(Number(jobId)), {
		onSuccess: () => {
			setBookmarkToggle(job?.bookmarkActivated);
		},
	});

  const handleCopyURLInClipboard = () => {
    window.navigator.clipboard.writeText(window.location.href).then(() => alert('클립보드에 복사되었습니다.'));
  }

	return (
		<Layout>
			<S.Container>
				<S.InnerContainer>
					<S.DetailDescription>
						<S.DetailIntroWrapper>
							<S.DetailIntroTitleWrapper>
								<S.JobTitle>{job?.title}</S.JobTitle>
								{job?.bookmarkActivated !== undefined && (
									<Bookmark jobId={job?.id} bookmarkActivated={job?.bookmarkActivated} top={'1.25em'} right={'1em'} />
								)}
							</S.DetailIntroTitleWrapper>

							<S.DetailIntroSubTitleWrapper>
								<S.CompanyName>{job?.company?.name}</S.CompanyName>
								<S.Location>{job?.location}</S.Location>
							</S.DetailIntroSubTitleWrapper>

							<S.DetailIntroSubInfoWrapper>
								<S.DetailIntroSubInfo>
									{job?.type && (
										<>
											<SiHandshake style={{ marginRight: '4px' }} />
											{job?.type}
										</>
									)}
								</S.DetailIntroSubInfo>

								<S.DetailIntroSubInfo>
									{job?.salary ? (
										<>
											<GrMoney style={{ marginRight: '4px' }} />
											{job?.salary}
										</>
									) : (
										<>
											<GrMoney style={{ marginRight: '4px' }} />
											회사 내규
										</>
									)}
								</S.DetailIntroSubInfo>

								<S.DetailIntroSubInfo>
									{job?.platform && (
										<>
											<GrBriefcase style={{ marginRight: '4px' }} />
											{job?.platform}
										</>
									)}
								</S.DetailIntroSubInfo>

								<S.DetailIntroSubInfo>
									{job?.education && (
										<>
											<FaUserGraduate style={{ marginRight: '4px' }} />
											{job?.education}
										</>
									)}
								</S.DetailIntroSubInfo>
								<S.DetailIntroSubInfo>
									{job?.career && (
										<>
											<GrPersonalComputer style={{ marginRight: '4px' }} />
											{job?.career}
										</>
									)}
								</S.DetailIntroSubInfo>

								<S.ApplyPeriod>
									{job?.postedAt && job?.expiredAt ? (
										<>
											{'('}
											{job?.postedAt} ~ {job?.expiredAt} <strong>{`(${getDateAgoText(job?.expiredAt)})`}</strong>
											{')'}
										</>
									) : (
										<>
											{'('}
											<strong>상시 모집</strong>
											{')'}
										</>
									)}
								</S.ApplyPeriod>
							</S.DetailIntroSubInfoWrapper>

							{job?.tags && job?.tags.length > 0 && (
								<S.TechStacks>
									{job?.tags.map((tag, idx) => {
										return (
											<Chip key={idx} paddingColumn="4px" paddingRow="8px" borderRadius="1.5em">
												{tag}
											</Chip>
										);
									})}
								</S.TechStacks>
							)}

							<S.DetailIntroBtnWrapper>
								<Button
									type="button"
									onClick={handleCopyURLInClipboard}
									buttonType="normal"
									padding="0.5em 1em"
									borderRadius="1em"
									fontSize="1rem"
								>
									<img src={ClipIcon} alt="" style={{ marginRight: '6px' }} />
									공고 링크 복사
								</Button>
								<S.LinkButton href={`${job?.applyUrl}`} target="_blank">
									<img src={CheckIcon} alt="" style={{ marginRight: '6px' }} />
									지원하기
								</S.LinkButton>
							</S.DetailIntroBtnWrapper>
						</S.DetailIntroWrapper>

						<S.DetailContentsWrapper>
							{job?.jobDetail?.summary && (
								<>
									<S.DescriptionTitle>공고 요약</S.DescriptionTitle>
									<S.Description>{job?.jobDetail?.summary}</S.Description>
									<br />
								</>
							)}

							{job?.jobDetail?.introduction && (
								<>
									<S.DescriptionTitle>회사 소개</S.DescriptionTitle>
									<S.Description>{job?.jobDetail?.introduction}</S.Description>
									<br />
								</>
							)}

							{job?.jobDetail?.mainTask && (
								<>
									<S.DescriptionTitle>주요 업무</S.DescriptionTitle>
									<S.Description>{job?.jobDetail?.mainTask}</S.Description>
									<br />
								</>
							)}

							{job?.jobDetail?.qualification && (
								<>
									<S.DescriptionTitle>자격 요건</S.DescriptionTitle>
									<S.Description>{job?.jobDetail?.qualification}</S.Description>
									<br />
								</>
							)}

							{job?.jobDetail?.procedure && (
								<>
									<S.DescriptionTitle>지원 절차</S.DescriptionTitle>
									<S.Description>{job?.jobDetail?.procedure}</S.Description>
									<br />
								</>
							)}

							{job?.jobDetail?.benefit && (
								<>
									<S.DescriptionTitle>복지 및 혜택</S.DescriptionTitle>
									<S.Description>{job?.jobDetail?.benefit}</S.Description>
									<br />
								</>
							)}
						</S.DetailContentsWrapper>
					</S.DetailDescription>
				</S.InnerContainer>
			</S.Container>
		</Layout>
	);
};

export default JobDetail;
