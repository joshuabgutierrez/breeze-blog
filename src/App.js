import React from 'react';
import Navbar from './components/Navbar';
import Theme from './Theme';
import { createGlobalStyle } from 'styled-components';
import Footer from './components/Footer';
import Home from './Home/Home';
import Post from './components/Post';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PostsContextProvider } from './context/postsContext';
import PostsList from './components/PostsList';

const GlobalStyle = createGlobalStyle`
	body {
		font-family: ${({ theme: { fonts } }) => fonts.mainFont};
		line-height: 1.3;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`;

export default function App() {
	return (
		<Theme>
			<React.Fragment>
				<GlobalStyle />
				<PostsContextProvider>
					<Router>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/post" component={Post} />
							<Route path="/list" render={(props) => <PostsList {...props} />} />
						</Switch>
						<Footer />
					</Router>
				</PostsContextProvider>
			</React.Fragment>
		</Theme>
	);
}
