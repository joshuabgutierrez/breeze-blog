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
import Signup from './components/Signup';
import Signin from './components/Signin';
import CreateNewPost from './PrivateComponents/CreateNewPost';

const GlobalStyle = createGlobalStyle`
	html, body {
		font-family: ${({ theme: { fonts } }) => fonts.mainFont};
		line-height: 1.3;
		min-height: 100vh;
		position: relative;
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
							<Route exact path="/post" component={Post} />
							<Route path="/list" component={PostsList} />
							<Route path="/signup" component={Signup} />
							<Route path="/signin" component={Signin} />
							<Route path="/post/new" component={CreateNewPost} />
						</Switch>
						<Footer />
					</Router>
				</PostsContextProvider>
			</React.Fragment>
		</Theme>
	);
}
