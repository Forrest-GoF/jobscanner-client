import { Link } from 'react-router-dom';
import * as S from './styled';
import { JobListItemType } from '@/types/apis/job';
import Chip from '@/components/shared/Chip';
import { GrBriefcase, GrMoney } from 'react-icons/gr';
import { TECH_STACK_SHOW_START, TECH_STACK_SHOW_END } from '@/constants/job';
import { getDateAgoText } from '@/utils/day';

const JobListItem = ({ job }: { job: JobListItemType }) => {
	return (
		<S.Container>
			<S.InnerContainer to={`/jobs/${job.id}`}>
				<S.ImageWrapper>
					<S.Image src={job.companyThumbnail} alt={`${job.companyName} 로고`} />
				</S.ImageWrapper>
				<S.DesciptionWrapper>
					<S.Title>{job.title}</S.Title>
					<S.CompanyName>{job.companyName}</S.CompanyName>
					{!job.expiredAt ? (
						<S.ExpiredDate>상시 모집</S.ExpiredDate>
					) : (
						<S.ExpiredDate>
							마감일 : {job.expiredAt} <strong>{`(${getDateAgoText(job.expiredAt)})`}</strong>
						</S.ExpiredDate>
					)}

					<S.SubInfoWrapper>
						<S.SubInfo>
							<GrBriefcase />
							{job.platform}
						</S.SubInfo>
						<S.SubInfo>
							<GrMoney />
							{job.salary ? job.salary : '회사 내규'}
						</S.SubInfo>
					</S.SubInfoWrapper>
					{job.stacks && (
						<S.TechStacksWrapper>
							{job.stacks.length > TECH_STACK_SHOW_END
								? job.stacks.slice(TECH_STACK_SHOW_START, TECH_STACK_SHOW_END).map((stack, idx) => {
										return (
											<Chip paddingColumn="4px" paddingRow="8px" borderRadius="10px" key={idx}>
												{stack}
											</Chip>
										);
								  })
								: job.stacks.map((stack, idx) => {
										return (
											<Chip paddingColumn="4px" paddingRow="8px" borderRadius="10px" key={idx}>
												{stack}
											</Chip>
										);
								  })}
							{job.stacks.length > TECH_STACK_SHOW_END && (
								<Chip paddingColumn="4px" paddingRow="8px" borderRadius="10px">
									외 {job.stacks.slice(TECH_STACK_SHOW_END).length}개
								</Chip>
							)}
						</S.TechStacksWrapper>
					)}
				</S.DesciptionWrapper>
			</S.InnerContainer>
		</S.Container>
	);
};

export default JobListItem;
