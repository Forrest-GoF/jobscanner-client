import React, { PropsWithChildren } from 'react';
import * as S from './styled';
import { Sidebar, Navbar } from '@/components/features';
import { HorizontalRule } from '../shared';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<S.Container>
			<Sidebar />
			<S.InnerWrapper>
				<Navbar />
				<HorizontalRule borderWidth="0.5px" />
				{children}
			</S.InnerWrapper>
		</S.Container>
	);
};

export default Layout;
