import React from 'react';
import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GlobalStyle = () => {
	return (
		<Global
			styles={css`
				${reset};

				@font-face {
					font-family: 'Spoqa_Han_Sans';
					font-weight: 700;
					src: local(''), url('/fonts/Spoqa_Han_Sans_Bold.woff2') format('woff2'),
						url('/fonts/Spoqa_Han_Sans_Bold.woff') format('woff'),
						url('/fonts/Spoqa_Han_Sans_Bold.ttf') format('truetype');
				}

				@font-face {
					font-family: 'Spoqa_Han_Sans';
					font-weight: 400;
					src: local(''), url('/fonts/Spoqa_Han_Sans_Regular.woff2') format('woff2'),
						url('/fonts/Spoqa_Han_Sans_Regular.woff') format('woff'),
						url('/fonts/Spoqa_Han_Sans_Regular.ttf') format('truetype');
				}

				@font-face {
					font-family: 'Spoqa_Han_Sans';
					font-weight: 300;
					src: local(''), url('/fonts/Spoqa_Han_Sans_Light.woff2') format('woff2'),
						url('/fonts/Spoqa_Han_Sans_Light.woff') format('woff'),
						url('/fonts/Spoqa_Han_Sans_Light.ttf') format('truetype');
				}

				@font-face {
					font-family: 'Spoqa_Han_Sans';
					font-weight: 100;
					src: local(''), url('/fonts/Spoqa_Han_Sans_Thin.woff2') format('woff2'),
						url('/fonts/Spoqa_Han_Sans_Thin.woff') format('woff'),
						url('/fonts/Spoqa_Han_Sans_Thin.ttf') format('truetype');
				}

				*,
				*::before,
				*::after {
					box-sizing: border-box;
					font-family: 'Spoqa_Han_Sans', sans-serif;
				}

				body {
					font-family: 'Spoqa_Han_Sans', sans-serif;
				}

				ul,
				li {
					list-style: none;
				}
			`}
		/>
	);
};

export default GlobalStyle;
