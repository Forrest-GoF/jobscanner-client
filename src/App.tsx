import { useEffect } from 'react';
import Routers from '@/Routers';
import useAnalyticsTracker from './hooks/useAnalyticsTracker';
import { getLocalStorageItem, KEYS } from './utils/storage';
import { useSetRecoilState } from 'recoil';
import { memberState } from './stores/member';
import { getMember } from './apis/member';

function App() {
	const setMemberState = useSetRecoilState(memberState);

	const dispatchRefresh = async () => {
		const { data } = await getMember();
		setMemberState(data.data);
	};

	useAnalyticsTracker();

	useEffect(() => {
		if (getLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN)) {
			dispatchRefresh();
		}
	}, []);

	return <Routers />;
}

export default App;
