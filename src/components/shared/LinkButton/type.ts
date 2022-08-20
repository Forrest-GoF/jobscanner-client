import { PropsWithChildren } from 'react';

export type StyledLinkButtonProps = {
	buttonType?: 'primary' | 'normal';
	padding?: string;
	borderRadius?: string;
	fontSize?: string;
};

export type Props = {
	href: string;
	target?: '_blank' | '_self' | '_top' | '_parent';
	rel?: string | undefined;
} & PropsWithChildren &
	StyledLinkButtonProps;
