import React, { useContext } from 'react';
import styled from 'styled-components';
import SingleAsidePost from './SingleAsidePost';
import { PostsContext } from '../context/postsContext';

const AsidePostsColumn = styled.aside`
	margin: 0 3em;
	width: 100%;
	max-width: 450px;
`;

export default function AsidePosts() {
	const { mainPosts } = useContext(PostsContext);
	return <AsidePostsColumn>{mainPosts.map((post) => <SingleAsidePost key={post.id} {...post} />)}</AsidePostsColumn>;
}
