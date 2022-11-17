import { Chip } from '@/components';
import * as S from './styled';
import { JobListItemResponseDto } from '@/types/apis/job';
import { PlatformIcon, SymbolIcon } from '@/assets/images/icons';
import { TECH_STACK_SHOW_START, TECH_STACK_SHOW_END, TECH_STACK_EMPTY } from '@/constants/job';

const JobListItem = ({ job }: { job: JobListItemResponseDto }) => {
	return (
		<S.Container>
			<S.InnerContainer to={`/jobs/${job.id}`}>
				<S.ImageWrapper bgImageSrc={`${job.companyThumbnail ?? SymbolIcon}`} />
				<S.DesciptionWrapper>
					<S.Title>{job.title}</S.Title>
					<S.CompanyName>{job.companyName}</S.CompanyName>

					<S.PlatformWrapper>
						<S.Platform>
							<img src={PlatformIcon} alt="" />
							{job.platform}
						</S.Platform>
					</S.PlatformWrapper>

					{job.tags && (
						<S.TechStacksWrapper>
							{job.tags.length > TECH_STACK_SHOW_END
								? job.tags.slice(TECH_STACK_SHOW_START, TECH_STACK_SHOW_END).map((stack, idx) => {
										return (
											<Chip
												key={idx}
												paddingColumn="0.125em"
												paddingRow="0.375em"
												borderRadius="10px"
												fontSize="0.875rem"
											>
												{stack}
											</Chip>
										);
								  })
								: job.tags.map((tag, idx) => {
										return (
											<Chip
												key={idx}
												paddingColumn="0.125em"
												paddingRow="0.375em"
												borderRadius="10px"
												fontSize="0.875rem"
											>
												{tag}
											</Chip>
										);
								  })}
							{job.tags.length > TECH_STACK_SHOW_END && (
								<Chip paddingColumn="0.125em" paddingRow="0.375em" borderRadius="10px" fontSize="0.875rem">
									외 {job.tags.slice(TECH_STACK_SHOW_END).length}개
								</Chip>
							)}
							{job.tags.length === TECH_STACK_EMPTY && (
								<Chip paddingColumn="0.125em" paddingRow="0.375em" borderRadius="10px" fontSize="0.875rem">
									등록 X
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
