import { HttpResponseDto } from './common';

export type JobListItemResponseDto = {
	id: number;
	title: string;
	bookmarkActivated: boolean;
	companyName: string;
	companyThumbnail: string;
	platform: string;
	views: number;
	expiredAt?: string | null;
	salary?: string | null;
	postedAt?: string | null;
	tags?: string[];
};

export interface JobListItemsResponseDto extends HttpResponseDto {
	data: {
		jobs: JobListItemResponseDto[];
		length?: number;
	};
}

export interface JobDetailResponseDto extends HttpResponseDto {
	data: {
		id: number;
		title: string;
		bookmarkActivated: boolean;
		views: number;
		viewsPerWeek: number;
		company: {
			name: string;
			employees?: number;
			averageSalary?: string;
			registrationDate?: string;
			thumbnailUrl?: string;
		};
		location?: string;
		postedAt?: string;
		expiredAt?: string;
		platform?: string;
		applyUrl: string;
		type?: string;
		salary?: string;
		education?: string;
		career?: string;
		tags?: string[];
		jobDetail: {
			summary: string;
			introduction?: string;
			qualification?: string;
			preferential?: string;
			procedure?: string;
			benefit?: string;
			mainTask?: string;
		};
	};
}

export interface MyBookmarkJobListResponseDto extends HttpResponseDto {
	data: JobListItemResponseDto[];
}

export interface BookmarkActivateResponseDto extends HttpResponseDto {
	data: {
		activated: boolean;
	};
}
