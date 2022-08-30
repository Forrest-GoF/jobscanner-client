import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getJob } from '@/apis/job';
import Layout from '@/components/layout';
import * as S from './styled';
import { Button, LinkButton } from '@/components/shared';
import { BsFillKanbanFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { GrPersonalComputer, GrBriefcase, GrMoney } from 'react-icons/gr';
import { FaUserGraduate } from 'react-icons/fa';
import { SiHandshake } from 'react-icons/si';
import { HiOutlinePaperClip } from 'react-icons/hi';
import { Chip } from '@/components/shared';
import { getDateAgoText } from '@/utils/day';

const JobDetail = () => {
	const { jobId } = useParams();
	const { data: job } = useQuery(['getJob'], () => getJob(Number(jobId)));

	return (
		<Layout>
			<S.Container>
				<S.DetailIntro>
					<S.JobTitle>{job?.title}</S.JobTitle>
					<S.CompanyName>{job?.company.name}</S.CompanyName>
					<S.ApplyPeriod>
						{job?.postedAt && job?.expiredAt ? (
							<>
								{job?.postedAt} ~ {job?.expiredAt} <strong>{`(${getDateAgoText(job?.expiredAt)})`}</strong>
							</>
						) : (
							'상시 모집'
						)}
					</S.ApplyPeriod>
					<S.Location>
						{job?.location && (
							<>
								<ImLocation style={{ marginRight: '4px' }} />
								{job?.location}
							</>
						)}
					</S.Location>
					<S.SubInfoWrapper>
						<S.SubInfoItemWrapper>
							{job?.type && (
								<>
									<SiHandshake style={{ marginRight: '4px' }} />
									{job?.type}
								</>
							)}
						</S.SubInfoItemWrapper>
						<S.SubInfoItemWrapper>
							{job?.salary ? (
								<>
									<GrMoney style={{ marginRight: '4px' }} />
									{job?.salary}
								</>
							) : (
								'회사 내규'
							)}
						</S.SubInfoItemWrapper>
						<S.SubInfoItemWrapper>
							{job?.platform && (
								<>
									<GrBriefcase style={{ marginRight: '4px' }} />
									{job?.platform}
								</>
							)}
						</S.SubInfoItemWrapper>
					</S.SubInfoWrapper>
					<S.SubInfoWrapper>
						<S.SubInfoItemWrapper>
							{job?.education && (
								<>
									<FaUserGraduate style={{ marginRight: '4px' }} />
									{job?.education}
								</>
							)}
						</S.SubInfoItemWrapper>
						<S.SubInfoItemWrapper>
							{job?.career && (
								<>
									<GrPersonalComputer style={{ marginRight: '4px' }} />
									{job?.career}
								</>
							)}
						</S.SubInfoItemWrapper>
					</S.SubInfoWrapper>

					<S.ButtonWrapper>
						<Button type="button" onClick={() => console.log('칸반에 추가')} buttonType="primary" fontSize="0.7em">
							<BsFillKanbanFill style={{ marginRight: '6px' }} />
							공고 현황에 추가
						</Button>
						<Button type="button" onClick={() => console.log('공고 링크 복사')} buttonType="normal" fontSize="0.7em">
							<HiOutlinePaperClip style={{ marginRight: '6px' }} />
							공고 링크 복사
						</Button>
						<LinkButton href={`${job?.applyUrl}`} target="_blank" buttonType="normal" fontSize="0.7em">
							<BsFillArrowRightSquareFill style={{ marginRight: '6px' }} />
							지원하기
						</LinkButton>
					</S.ButtonWrapper>
				</S.DetailIntro>

				<S.DetailDescription>
					{job?.jobDetail?.summary && (
						<>
							<S.DescriptionTitle>공고 요약</S.DescriptionTitle>
							<S.DescriptionItemWrapper>{job?.jobDetail?.summary}</S.DescriptionItemWrapper>
							<br />
						</>
					)}

					{job?.jobDetail?.introduction && (
						<>
							<S.DescriptionTitle>🏠 회사 소개</S.DescriptionTitle>
							<S.DescriptionItemWrapper>{job?.jobDetail?.introduction}</S.DescriptionItemWrapper>
							<br />
						</>
					)}

					{job?.jobDetail?.mainTask && (
						<>
							<S.DescriptionTitle>🎯 주요 업무</S.DescriptionTitle>
							<S.DescriptionItemWrapper>{job?.jobDetail?.mainTask}</S.DescriptionItemWrapper>
							<br />
						</>
					)}

					{job?.jobDetail?.qualification && (
						<>
							<S.DescriptionTitle>📝 자격 요건</S.DescriptionTitle>
							<S.DescriptionItemWrapper>{job?.jobDetail?.qualification}</S.DescriptionItemWrapper>
							<br />
						</>
					)}

					{job?.jobDetail?.procedure && (
						<>
							<S.DescriptionTitle>💼 지원 절차</S.DescriptionTitle>
							<S.DescriptionItemWrapper>{job?.jobDetail?.procedure}</S.DescriptionItemWrapper>
							<br />
						</>
					)}

					{job?.jobDetail?.benefit && (
						<>
							<S.DescriptionTitle>🎉 복지 및 혜택</S.DescriptionTitle>
							<S.DescriptionItemWrapper>{job?.jobDetail?.benefit}</S.DescriptionItemWrapper>
							<br />
						</>
					)}

					{job?.tags && job?.tags.length > 0 && (
						<>
							<S.DescriptionTitle>🛠 기술스택 ・ 툴</S.DescriptionTitle>
							<S.TechStacksWrapper>
								<S.TechStacks>
									{job?.tags.map((tag, idx) => {
										return (
											<Chip key={idx} paddingColumn="4px" paddingRow="8px" borderRadius="10px">
												{tag}
											</Chip>
										);
									})}
								</S.TechStacks>
							</S.TechStacksWrapper>
						</>
					)}
				</S.DetailDescription>
			</S.Container>
		</Layout>
	);
};

export default JobDetail;
