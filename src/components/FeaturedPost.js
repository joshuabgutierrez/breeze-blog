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
	margin-bottom: 5em;

	@media (max-width: 1260px) {
		max-width: 750px;
		margin: 0 auto 5em auto;
	}

	img {
		border-radius: 5px;
		height: 400px;
		max-width: 100%;

		@media (max-width: 800px) {
			height: auto;
		}
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

export default function FeaturedPost({ isFeatured, post }) {
	const history = useHistory();
	const { articles } = useContext(PostsContext);

	const renderFeaturedPost = () => {
		return articles.find((article) => article.isFeatured === true);
	};

	const posts = isFeatured ? renderFeaturedPost() : post;
	const excerpt = posts.content.slice(0, 155);

	return (
		<MainPost>
			<img src={posts.postImg} alt="Taking pictures with a smartphone" />
			<Tag>Blog Post</Tag>
			<PostTitle>{posts.title}</PostTitle>
			<p>{excerpt} ...</p>
			<ButtonPost onClick={() => history.push({ pathname: '/post', state: { ...posts } })}>Read Story</ButtonPost>
		</MainPost>
	);
}
