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
	const { newPosts } = useContext(PostsContext);
	return (
		<NewPostsSection>
			<h2>New Blog Posts</h2>
			<StyledNewPosts>{newPosts.map((newPost) => <NewPost key={newPost.id} {...newPost} />)}</StyledNewPosts>
		</NewPostsSection>
	);
}
