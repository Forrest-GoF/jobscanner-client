import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getJobs } from '@/apis/job';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { logout } from '@/apis/auth';
import { getLocalStorageItem, KEYS, removeLocalStorageItem } from '@/utils/storage';

const JobSearch = () => {
	const { data: jobs } = useQuery(['getJobs'], getJobs);

	return (
		<div>
			공고 리스트 페이지입니다.
			<Link to="/jobs/1">공고 상세리스트 페이지로 이동</Link>
		</div>
	);
};

export default JobSearch;
