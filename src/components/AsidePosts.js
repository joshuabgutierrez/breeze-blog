import React from 'react';
import styled from 'styled-components';
import SingleAsidePost from './SingleAsidePost';
import { posts } from '../posts';

const AsidePostsColumn = styled.aside`
	margin: 0 3em;
	width: 100%;
	max-width: 450px;
`;

export default function AsidePosts() {
	return <AsidePostsColumn>{posts.map((post) => <SingleAsidePost key={post.id} {...post} />)}</AsidePostsColumn>;
}
