import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getJob } from '@/apis/job';
import { jobDetailMock1, jobDetailMock2 } from '@/assets/mock/job';
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
	return (
		<Layout>
			<S.Container>
				<S.DetailIntro>
					<S.JobTitle>{jobDetailMock1.title}</S.JobTitle>
					<S.CompanyName>{jobDetailMock1.company.name}</S.CompanyName>
					<S.ApplyPeriod>
						{jobDetailMock1.postedAt && jobDetailMock1.expiredAt ? (
							<>
								{jobDetailMock1.postedAt} ~ {jobDetailMock1.expiredAt}{' '}
								<strong>{`(${getDateAgoText(jobDetailMock1.expiredAt)})`}</strong>
							</>
						) : (
							'상시 모집'
						)}
					</S.ApplyPeriod>
					<S.Location>
						{jobDetailMock1.location && (
							<>
								<ImLocation style={{ marginRight: '4px' }} />
								{jobDetailMock1.location}
							</>
						)}
					</S.Location>
					<S.SubInfoWrapper>
						<S.SubInfoItemWrapper>
							{jobDetailMock1.type && (
								<>
									<SiHandshake style={{ marginRight: '4px' }} />
									{jobDetailMock1.type}
								</>
							)}
						</S.SubInfoItemWrapper>
						<S.SubInfoItemWrapper>
							{jobDetailMock1.salary ? (
								<>
									<GrMoney style={{ marginRight: '4px' }} />
									{jobDetailMock1.salary}
								</>
							) : (
								'회사 내규'
							)}
						</S.SubInfoItemWrapper>
						<S.SubInfoItemWrapper>
							{jobDetailMock1.platform && (
								<>
									<GrBriefcase style={{ marginRight: '4px' }} />
									{jobDetailMock1.platform}
								</>
							)}
						</S.SubInfoItemWrapper>
					</S.SubInfoWrapper>
					<S.SubInfoWrapper>
						<S.SubInfoItemWrapper>
							{jobDetailMock1.education && (
								<>
									<FaUserGraduate style={{ marginRight: '4px' }} />
									{jobDetailMock1.education}
								</>
							)}
						</S.SubInfoItemWrapper>
						<S.SubInfoItemWrapper>
							{jobDetailMock1.career && (
								<>
									<GrPersonalComputer style={{ marginRight: '4px' }} />
									{jobDetailMock1.career}
								</>
							)}
						</S.SubInfoItemWrapper>
					</S.SubInfoWrapper>

					<S.ButtonWrapper>
						<Button type="button" onClick={() => console.log('칸반에 추가')} buttonType="normal" fontSize="0.7em">
							<BsFillKanbanFill style={{ marginRight: '6px' }} />
							칸반에 추가
						</Button>
						<Button type="button" onClick={() => console.log('공고 링크 복사')} buttonType="normal" fontSize="0.7em">
							<HiOutlinePaperClip style={{ marginRight: '6px' }} />
							공고 링크 복사
						</Button>
						<LinkButton href={`${jobDetailMock1.applyUrl}`} target="_blank" buttonType="primary" fontSize="0.7em">
							<BsFillArrowRightSquareFill style={{ marginRight: '6px' }} />
							지원하기
						</LinkButton>
					</S.ButtonWrapper>
				</S.DetailIntro>
				<S.DetailDescription>
					{jobDetailMock1.jobDetail.summary && (
						<>
							<S.DescriptionTitle>공고 요약</S.DescriptionTitle>
							<S.DescriptionItemWrapper>{jobDetailMock1.jobDetail.summary}</S.DescriptionItemWrapper>
							<br />
						</>
					)}

					{jobDetailMock1.jobDetail.introduction && (
						<>
							<S.DescriptionTitle>회사 소개</S.DescriptionTitle>
							<S.DescriptionItemWrapper>{jobDetailMock1.jobDetail.introduction}</S.DescriptionItemWrapper>
							<br />
						</>
					)}

					{jobDetailMock1.jobDetail.mainTask && (
						<>
							<S.DescriptionTitle>주요 업무</S.DescriptionTitle>
							<S.DescriptionItemWrapper>{jobDetailMock1.jobDetail.mainTask}</S.DescriptionItemWrapper>
							<br />
						</>
					)}

					{jobDetailMock1.jobDetail.qualification && (
						<>
							<S.DescriptionTitle>자격 요건</S.DescriptionTitle>
							<S.DescriptionItemWrapper>{jobDetailMock1.jobDetail.qualification}</S.DescriptionItemWrapper>
							<br />
						</>
					)}

					{jobDetailMock1.jobDetail.procedure && (
						<>
							<S.DescriptionTitle>지원 절차</S.DescriptionTitle>
							<S.DescriptionItemWrapper>{jobDetailMock1.jobDetail.procedure}</S.DescriptionItemWrapper>
							<br />
						</>
					)}

					{jobDetailMock1.jobDetail.benefit && (
						<>
							<S.DescriptionTitle>복지 및 혜택</S.DescriptionTitle>
							<S.DescriptionItemWrapper>{jobDetailMock1.jobDetail.benefit}</S.DescriptionItemWrapper>
							<br />
						</>
					)}

					{jobDetailMock1.tags && (
						<>
							<S.DescriptionTitle>기술스택 ・ 툴</S.DescriptionTitle>
							<S.TechStacksWrapper>
								<S.TechStacks>
									{jobDetailMock1.tags.map((tag, idx) => {
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
