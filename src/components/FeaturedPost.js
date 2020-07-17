import React, { useContext } from 'react';
import Button from '../reusable-styled-components/Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { PostsContext } from '../context/postsContext';

const MainPost = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 600px;

	img {
		border-radius: 5px;
		height: 400px;
	}
`;

const Tag = styled.span`
	color: ${({ theme: { colors } }) => colors.electricBlue};
	font-weight: bold;
	font-size: 0.9rem;
	margin-top: 1em;
`;

const PostTitle = styled.h3`
	font-weight: bold;
	font-size: 2.3rem;
	margin: 0;
	margin-top: 0.7em;
`;

const ButtonPost = styled(Button)`
	max-width: 120px;
	margin-top: 1.5em;
	padding: 1em 0;
`;

export default function FeaturedPost() {
	const history = useHistory();
	const { articles } = useContext(PostsContext);
	const excerpt = articles[0].content.slice(0, 155);

	return (
		<MainPost>
			<img src={articles[0].postImg} alt="Taking pictures with a smartphone" />
			<Tag>Blog Post</Tag>
			<PostTitle>{articles[0].title}</PostTitle>
			<p>{excerpt} ...</p>
			<ButtonPost onClick={() => history.push({ pathname: '/post', state: { ...articles[0] } })}>
				Read Story
			</ButtonPost>
		</MainPost>
	);
}
