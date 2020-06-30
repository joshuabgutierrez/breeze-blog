import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		electricBlue: '#1827ce',
		wesbos: '#fcc600'
	},
	fonts: {
		default: 'sans-serif',
		logoFont: 'Fredoka One',
		mainFont: 'Raleway'
	}
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
