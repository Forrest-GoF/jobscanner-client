import { Login, JobSearch, JobDetail, NotFound, OAuthRedirect, MyKanban } from '@/pages';
import { Routes, Route } from 'react-router-dom';

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<JobSearch />} />
			<Route path="/jobs/:jobId" element={<JobDetail />} />
			<Route path="/login" element={<Login />} />
			<Route path="/oauth/callback/:social" element={<OAuthRedirect />} />
			<Route path="/oauth/callback" element={<OAuthRedirect />} />
			<Route path="/kanban" element={<MyKanban />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Routers;
