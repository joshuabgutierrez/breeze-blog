import React from 'react';
import Navbar from './components/Navbar';
import Theme from './Theme';
import { createGlobalStyle } from 'styled-components';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
	body {
		font-family: ${({ theme: { fonts } }) => fonts.mainFont}
	}
`;

export default function App() {
	return (
		<Theme>
			<React.Fragment>
				<GlobalStyle />
				<Navbar />
				<Main />
			</React.Fragment>
		</Theme>
	);
}
