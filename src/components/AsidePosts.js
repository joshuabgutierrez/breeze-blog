import React, { useContext } from 'react';
import styled from 'styled-components';
import SingleAsidePost from './SingleAsidePost';
import { PostsContext } from '../context/postsContext';

const AsidePostsColumn = styled.aside`
	margin: 0 3em;
	width: 100%;
	max-width: 450px;

	@media (max-width: 1055px) {
		max-width: 80%;
		margin: 0 auto;
	}
`;

export default function AsidePosts() {
	const data = useContext(PostsContext);
	const { webinars, reports, articles } = data;
	const asideArticle = articles.filter((article) => article.id === 2);
	const asidePosts = [ ...asideArticle, ...webinars, ...reports ];
	return <AsidePostsColumn>{asidePosts.map((post) => <SingleAsidePost key={post.id} {...post} />)}</AsidePostsColumn>;
}
