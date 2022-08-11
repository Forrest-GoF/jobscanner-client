import React, { PropsWithChildren } from 'react';
import * as S from './styled';
import { Sidebar, Navbar } from '@/components/features';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<S.Container>
			<Sidebar />
			<S.InnerWrapper>
				<Navbar />
				{children}
			</S.InnerWrapper>
		</S.Container>
	);
};

export default Layout;
