import React from 'react';
import styled from 'styled-components';
import ButtonLink from '../reusable-styled-components/ButtonLink';
import PostTag from '../reusable-styled-components/PostTag';
import { useHistory } from 'react-router-dom';

const SinglePostContainer = styled.div`
	margin-bottom: 2em;
	display: flex;
`;

const StyledPostImage = styled.img`
	width: 100%;
	max-width: 150px;
	height: 150px;
	border-radius: 5px;
`;

const RightContainer = styled.div`
	margin-left: 1em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const PostTitle = styled.h3`font-size: 1.25rem;`;

export default function SingleAsidePost({ tag, title, postImg }) {
	const history = useHistory();
	return (
		<SinglePostContainer>
			<StyledPostImage src={postImg} alt="" />
			<RightContainer>
				<PostTag color={tag}>{tag === 'Story' ? 'Blog Post' : tag}</PostTag>
				<PostTitle>{title}</PostTitle>
				<ButtonLink onClick={() => history.push('/post')}>
					<span>Read {tag}</span>
				</ButtonLink>
			</RightContainer>
		</SinglePostContainer>
	);
}
