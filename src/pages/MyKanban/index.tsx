import Layout from '@/components/layout';
import * as S from './styled';
import NotFound from '@/assets/images/shared/404.svg';

const MyKanban = () => {
	return (
		<Layout>
			<S.Container>
				<S.NotFoundWrapper>
					<img src={NotFound} alt="" />
					<p>Getting Ready...</p>
				</S.NotFoundWrapper>
			</S.Container>
		</Layout>
	);
};

export default MyKanban;
