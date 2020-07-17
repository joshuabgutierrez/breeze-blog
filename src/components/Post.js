import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PostTag from '../reusable-styled-components/PostTag';
import AuthorInfo from './AuthorInfo';

const StyledPost = styled.div`
	margin: 2em auto 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const PostHeader = styled.header`
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

const HeaderDetails = styled.div`text-align: center;`;

const Author = styled.p`
	font-weight: bold;
	font-size: 1.1rem;
	margin: 0;
`;
const Date = styled.p`
	opacity: 0.8;
	margin: 0 0 1.5em 0;
`;

const PostImage = styled.img`
	max-width: 1000px;
	width: 100%;
`;

const Content = styled.p`
	margin-top: 2em;
	width: 60%;
	font-size: 1.1rem;
	line-height: 1.6;
`;

export default function Post() {
	const history = useHistory();
	const { tag, title, author, content, postImg, postedDate } = history.location.state;

	useEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ history ]
	);
	return (
		<StyledPost>
			<PostHeader>
				<PostTag color={tag}>{tag === 'Story' ? 'Blog Post' : tag}</PostTag>
				<PostTitle>{title}</PostTitle>
				<HeaderDetails>
					<Author>{author}</Author>
					<Date>{postedDate}</Date>
				</HeaderDetails>
			</PostHeader>
			<PostImage src={postImg} alt="" />
			<Content>{content}</Content>
			<AuthorInfo />
		</StyledPost>
	);
}
