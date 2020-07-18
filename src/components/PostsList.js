import React from 'react';
import FeaturedPost from './FeaturedPost';
import styled from 'styled-components';

const PostsListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default function PostsList({ location }) {
	const postsSelected = location.state;

	return (
		<PostsListContainer>
			{postsSelected.map((post) => <FeaturedPost key={post.id} post={post} />)}
		</PostsListContainer>
	);
}
