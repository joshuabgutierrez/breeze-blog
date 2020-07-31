import React, { useContext } from 'react';
import NewPost from './NewPost';
import styled from 'styled-components';
import { PostsContext } from '../context/postsContext';
import Grid from '@material-ui/core/Grid';

const NewPostsSection = styled.section`
	margin: 4em auto;
	max-width: 100%;
	width: 85%;
	padding: 0 2em;

	& h2 {
		margin-left: 3em;
	}

	@media (max-width: 962px) {
		width: 100%;
		padding: 0;
	}
`;

export default function NewPosts() {
	const { articles } = useContext(PostsContext);
	const newArticles = articles.filter((article) => article.id > 2);
	return (
		<NewPostsSection>
			<h2>New Blog Posts</h2>
			<Grid container>{newArticles.map((article) => <NewPost key={article.id} {...article} />)}</Grid>
		</NewPostsSection>
	);
}
