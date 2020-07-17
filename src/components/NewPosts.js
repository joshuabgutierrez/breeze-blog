import React, { useContext } from 'react';
import NewPost from './NewPost';
import styled from 'styled-components';
import { PostsContext } from '../context/postsContext';

const NewPostsSection = styled.section`
	margin-top: 4em;
	h2 {
		margin-left: 7.5em;
	}
`;

const StyledNewPosts = styled.div`
	display: flex;
	justify-content: center;
`;

export default function NewPosts() {
	const { articles } = useContext(PostsContext);
	const newArticles = articles.filter((article) => article.id > 2);
	return (
		<NewPostsSection>
			<h2>New Blog Posts</h2>
			<StyledNewPosts>{newArticles.map((article) => <NewPost key={article.id} {...article} />)}</StyledNewPosts>
		</NewPostsSection>
	);
}
