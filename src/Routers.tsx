import {
	Signin,
	Signup,
	Onboarding,
	OAuthRedirect,
	JobSearch,
	JobDetail,
	MyBookmarkJobs,
	MyApplyJobs,
	MyKanban,
	MyPage,
	ProfileEdit,
	PasswordEdit,
	EmailEdit,
	AccountEdit,
	NotFound,
} from '@/pages';
import { Routes, Route } from 'react-router-dom';

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<JobSearch />} />
			<Route path="/jobs/:jobId" element={<JobDetail />} />
			<Route path="/signin" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/onboarding" element={<Onboarding />} />
			<Route path="/oauth/callback/:social" element={<OAuthRedirect />} />
			<Route path="/oauth/callback" element={<OAuthRedirect />} />
			<Route path="/kanban" element={<MyKanban />} />
			<Route path="/status/bookmark" element={<MyBookmarkJobs />} />
			<Route path="/status/apply" element={<MyApplyJobs />} />
			<Route path="/mypage/*" element={<MyPage />}>
				<Route path="profile" element={<ProfileEdit />} />
				<Route path="password" element={<PasswordEdit />} />
				<Route path="email" element={<EmailEdit />} />
				<Route path="account" element={<AccountEdit />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Routers;
