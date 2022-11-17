import { PropsWithChildren } from 'react';
import { ModalPortal } from '@/components';
import * as S from './styled';

const ModalFrame = (props: PropsWithChildren) => {
	return (
		<ModalPortal wrapperId="modal-root">
			<S.ModalOverlay />
			<S.ModalContentContainer>{props.children}</S.ModalContentContainer>
		</ModalPortal>
	);
};

export default ModalFrame;
