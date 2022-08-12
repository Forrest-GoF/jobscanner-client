export type JobListItemType = {
	id: number;
	title: string;
	companyName: string;
	companyThumbnail: string;
	salary?: string | null;
	platform: string;
	expiredAt?: string | null;
	stacks?: string[];
};

export type JobListItemsType = {
	jobs: JobListItemType[];
	length: number;
};
