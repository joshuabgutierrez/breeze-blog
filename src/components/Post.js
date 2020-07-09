import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PostTag from '../reusable-styled-components/PostTag';

const StyledPost = styled.div`
	margin: 2em auto 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const PostTitle = styled.h1`
	color: #000;
	text-align: center;
	max-width: 600px;
	font-size: 2.5rem;
`;

const Intro = styled.p`
	width: 70%;
	font-size: 1.1rem;
`;

export default function Post() {
	const history = useHistory();
	const { tag, title, excerpt, postImg } = history.location.state;
	return (
		<StyledPost>
			<PostTag color={tag}>{tag === 'Story' ? 'Blog Post' : tag}</PostTag>
			<PostTitle>{title}</PostTitle>
			<img src={postImg} alt="" />
			<Intro>{excerpt}</Intro>
		</StyledPost>
	);
}
