import { PropsWithChildren } from 'react';
import * as S from './styled';
import { Navbar } from '@/components';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<S.Container>
			<Navbar />
			{children}
		</S.Container>
	);
};

export default Layout;
