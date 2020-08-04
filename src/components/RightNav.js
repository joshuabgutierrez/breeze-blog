import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../reusable-styled-components/Button';
import { PostsContext } from '../context/postsContext';
import styled from 'styled-components';

const ResponsiveNavItems = styled.ul`
	box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.3);
	padding: 0;
	margin: 0;
	background-color: #ffffff;
	height: 35vh;
	width: 150px;
	padding: 1em;
	position: absolute;
	top: 0;
	right: 0;
	transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(120%)')};
	transition: transform 0.3s ease-in-out;

	& li {
		margin: 0.75em 0;
	}
`;

function RightNav({ open }) {
	const { articles, reports, webinars } = useContext(PostsContext);
	const location = useLocation();
	const [ isUser, setIsUser ] = useState(false);

	useEffect(
		() => {
			if (location.pathname === '/signup' || location.pathname === '/signin') {
				setIsUser(true);
			}
			return () => {
				setIsUser(false);
			};
		},
		[ location ]
	);

	return (
		<ResponsiveNavItems open={open}>
			<li>
				<Link to={{ pathname: '/list', state: articles }}>Articles</Link>
			</li>
			<li>
				<Link to={{ pathname: '/list', state: reports }}>Reports</Link>
			</li>
			<li>
				<Link to={{ pathname: '/list', state: webinars }}>Webinars</Link>
			</li>
			{isUser ? (
				''
			) : (
				<Link to="/signup">
					<Button>Write a Post</Button>
				</Link>
			)}
		</ResponsiveNavItems>
	);
}

export default RightNav;
