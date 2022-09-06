export type JobListItemResponse = {
	id: number;
	title: string;
	companyName: string;
	companyThumbnail: string;
	salary?: string | null;
	platform: string;
	expiredAt?: string | null;
	tags?: string[];
};

export type JobListItemsResponse = {
	jobs: JobListItemResponse[];
	length?: number;
};

export type JobDetailResponse = {
	id: number;
	title: string;
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
