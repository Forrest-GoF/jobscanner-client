import React from 'react';
import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = () => {
	return (
		<Global
			styles={css`
				${reset}

				ul, li {
					list-style: none;
				}
			`}
		/>
	);
};

export default GlobalStyle;
