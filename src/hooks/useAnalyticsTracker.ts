import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const useAnalyticsTracker = () => {
	const locator = useLocation();
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		if (!window.location.href.includes('localhost')) {
			ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKIG_ID, { debug: true });
		}
		setInitialized(true);
	}, []);

	useEffect(() => {
		if (initialized) {
			ReactGA.set({ page: locator.pathname });
			ReactGA.pageview(locator.pathname + locator.search);
		}
	}, [initialized, locator]);
};

export default useAnalyticsTracker;
