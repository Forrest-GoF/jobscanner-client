import Routers from '@/Routers';
import useAnalyticsTracker from './hooks/useAnalyticsTracker';

function App() {
	useAnalyticsTracker();

	return <Routers />;
}

export default App;
