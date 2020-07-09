import React from 'react';
import ButtonLink from '../reusable-styled-components/ButtonLink';
import styled from 'styled-components';
import PostTag from '../reusable-styled-components/PostTag';

const NewPostContainer = styled.div`
	width: 100%;
	max-width: 400px;
	display: flex;
	flex-direction: column;

	& img {
		width: 100%;
		max-width: 350px;
		border-radius: 5px;
	}

	& h3 {
		max-width: 80%;
	}
`;

export default function NewPost({ postImg, tag, title }) {
	return (
		<NewPostContainer>
			<img src={postImg} alt="testing" />
			<PostTag color={tag} marginTop="mt-1">
				{tag === 'Story' ? 'Blog Post' : tag}
			</PostTag>
			<h3>{title}</h3>
			<ButtonLink>
				<span>Read {tag}</span>
			</ButtonLink>
		</NewPostContainer>
	);
}
