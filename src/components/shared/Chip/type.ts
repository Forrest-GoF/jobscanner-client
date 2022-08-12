import { PropsWithChildren } from 'react';

export type StyledContainerProps = {
	paddingRow: string;
	paddingColumn: string;
	borderRadius: string;
	fontSize?: string;
};

export type Props = PropsWithChildren & StyledContainerProps;
