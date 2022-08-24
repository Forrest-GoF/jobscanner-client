export const TECH_STACK_SHOW_END = 3;
export const TECH_STACK_SHOW_START = 0;

export const JOB_SEARCH_SELECT_ITEMS = [
	{
		id: 1,
		placeholder: '경력',
		dropdownItems: [
			{
				id: 1,
				label: '전체',
				name: 'type',
				value: '',
			},
			{
				id: 2,
				label: '정규직',
				name: 'type',
				value: 'FULLTIME',
			},
			{
				id: 3,
				label: '파트타임직',
				name: 'type',
				value: 'PARTTIME',
			},
			{
				id: 4,
				label: '인턴직',
				name: 'type',
				value: 'INTERNSHIP',
			},
			{
				id: 5,
				label: '계약직',
				name: 'type',
				value: 'CONTRACT',
			},
		],
	},
	{
		id: 2,
		placeholder: '직원 수',
		dropdownItems: [
			{
				id: 1,
				label: '전체',
				name: 'minEmployees',
				value: '',
			},
			{
				id: 2,
				label: '5명 이상',
				name: 'minEmployees',
				value: '5',
			},
			{
				id: 3,
				label: '20명 이상',
				name: 'minEmployees',
				value: '20',
			},
			{
				id: 4,
				label: '50명 이상',
				name: 'minEmployees',
				value: '50',
			},
			{
				id: 5,
				label: '100명 이상',
				name: 'minEmployees',
				value: '100',
			},
		],
	},
	{
		id: 3,
		placeholder: '연봉',
		dropdownItems: [
			{
				id: 1,
				label: '전체',
				name: 'minSalary',
				value: '',
			},
			{
				id: 2,
				label: '3,000원 이상',
				name: 'minSalary',
				value: '3000',
			},
			{
				id: 3,
				label: '3,500원 이상',
				name: 'minSalary',
				value: '3500',
			},
			{
				id: 4,
				label: '4,000원 이상',
				name: 'minSalary',
				value: '4000',
			},
			{
				id: 5,
				label: '4,500원 이상',
				name: 'minSalary',
				value: '4500',
			},
			{
				id: 6,
				label: '5,000원 이상',
				name: 'minSalary',
				value: '5000',
			},
			{
				id: 7,
				label: '5,500원 이상',
				name: 'minSalary',
				value: '5500',
			},
			{
				id: 8,
				label: '6,000원 이상',
				name: 'minSalary',
				value: '6000',
			},
			{
				id: 9,
				label: '6,500원 이상',
				name: 'minSalary',
				value: '6500',
			},
			{
				id: 10,
				label: '7,000원 이상',
				name: 'minSalary',
				value: '7000',
			},
			{
				id: 11,
				label: '7,500원 이상',
				name: 'minSalary',
				value: '7500',
			},
			{
				id: 12,
				label: '8,000원 이상',
				name: 'minSalary',
				value: '8000',
			},
		],
	},
	{
		id: 4,
		placeholder: '공고 등록일',
		dropdownItems: [
			{
				id: 1,
				label: '최신순',
				name: 'sortedBy',
				value: 'POSTED',
			},
			{
				id: 2,
				label: '마감순',
				name: 'sortedBy',
				value: 'EXPIRED',
			},
		],
	},
];
