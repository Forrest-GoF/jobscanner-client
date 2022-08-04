import React from 'react';
import { Link } from 'react-router-dom';

const JobSearch = () => {
	return (
		<div>
			공고 리스트 페이지입니다.
			<Link to="/jobs/1">공고 상세리스트 페이지로 이동</Link>
		</div>
	);
};

export default JobSearch;
