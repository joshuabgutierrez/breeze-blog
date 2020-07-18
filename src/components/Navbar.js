import React from 'react';
import styled from 'styled-components';
import Button from '../reusable-styled-components/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PostsContext } from '../context/postsContext';

const StyledNav = styled.nav`
	background-color: #fff;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const Logo = styled.h1`
	font-family: ${({ logo, theme: { fonts } }) => (logo ? fonts.logoFont : fonts.default)};
	font-size: 2rem;
	color: #000;
	text-transform: uppercase;
`;

const NavLinks = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
`;

const NavLink = styled.li`
	list-style: none;
	color: #333;
	font-weight: bold;
	margin: 0 0.5em;
	cursor: pointer;
`;

export default function Navbar() {
	const { articles, reports, webinars } = useContext(PostsContext);
	return (
		<StyledNav>
			<Link to="/">
				<Logo logo>Breeze</Logo>
			</Link>
			<NavLinks>
				<NavLink>
					<Link to={{ pathname: '/list', state: articles }}>Articles</Link>
				</NavLink>
				<NavLink>
					<Link to={{ pathname: '/list', state: reports }}>Reports</Link>
				</NavLink>
				<NavLink>
					<Link to={{ pathname: '/list', state: webinars }}>Webinars</Link>
				</NavLink>
			</NavLinks>
			<Button>Write a post</Button>
		</StyledNav>
	);
}
