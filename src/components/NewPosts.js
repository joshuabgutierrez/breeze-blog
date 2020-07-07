import React from 'react';
import { newPosts } from '../posts';
import NewPost from './NewPost';
import styled from 'styled-components';

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
	return (
		<NewPostsSection>
			<h2>New Blog Posts</h2>
			<StyledNewPosts>{newPosts.map((newPost) => <NewPost key={newPost.id} {...newPost} />)}</StyledNewPosts>
		</NewPostsSection>
	);
}
