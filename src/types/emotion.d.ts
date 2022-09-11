import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			primary: {
				100: string;
				200: string;
				300: string;
				400: string;
				500: string;
				600: string;
				700: string;
				800: string;
			};
			blue: {
				100: string;
				200: string;
				300: string;
				400: string;
				500: string;
				600: string;
				700: string;
				800: string;
			};
			grey: {
				100: string;
				200: string;
				300: string;
				400: string;
				500: string;
				600: string;
				700: string;
				800: string;
			};
			white: string;
			black: string;
		};
		fontSize: {
			fs10: string;
			fs11: string;
			fs12: string;
			fs13: string;
			fs14: string;
			fs15: string;
			fs16: string;
			fs17: string;
			fs18: string;
			fs19: string;
			fs20: string;
		};

		fontWeight: {
			light: number;
			regular: number;
			medium: number;
			bold: number;
			strongBold: number;
		};
		lineHeight: {
			lh10: string;
			lh11: string;
			lh12: string;
			lh13: string;
			lh14: string;
			lh15: string;
			lh16: string;
			lh17: string;
			lh18: string;
			lh19: string;
			lh20: string;
		};
	}
}
