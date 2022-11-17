import { useState, useLayoutEffect, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type Props = {
	wrapperId: 'modal-root';
};

const ModalPortal = (props: Props & PropsWithChildren) => {
	const createWrapperAndAppendToBody = (wrapperId: string) => {
		if (document.getElementById(wrapperId)) {
			return document.getElementById(wrapperId) as HTMLDivElement;
		} else {
			const wrapperElement = document.createElement('div');
			wrapperElement.setAttribute('id', wrapperId);
			document.body.appendChild(wrapperElement);
			return wrapperElement;
		}
	};

	const [wrapperElement, setWrapperElement] = useState<HTMLDivElement | null>(null);

	useLayoutEffect(() => {
		setWrapperElement(createWrapperAndAppendToBody(props.wrapperId));
		return () => {
			createWrapperAndAppendToBody(props.wrapperId)?.remove();
		};
	}, [props.wrapperId]);

	return wrapperElement ? createPortal(props.children, wrapperElement) : null;
};

export default ModalPortal;
