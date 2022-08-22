import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from '@/styles';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import App from '@/App';

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
