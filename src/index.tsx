import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from '@/styles';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import App from '@/App';

Sentry.init({
	dsn: import.meta.env.VITE_SENTRY_DSN,
	integrations: [new BrowserTracing()],
	debug: import.meta.env.MODE === 'development',
	tracesSampleRate: 1.0,
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<RecoilRoot>
					<App />
				</RecoilRoot>
			</QueryClientProvider>
		</BrowserRouter>
	</ThemeProvider>,
);
