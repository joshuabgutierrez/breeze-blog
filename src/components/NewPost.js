import React from 'react';
import ButtonLink from '../reusable-styled-components/ButtonLink';
import styled from 'styled-components';

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

	& span {
		color: ${({ theme: { colors } }) => colors.electricBlue};
		font-weight: bold;
		font-size: 0.9rem;
		margin-top: 1em;
	}

	& h3 {
		max-width: 80%;
	}
`;

export default function NewPost({ postImg, tag, title }) {
	return (
		<NewPostContainer>
			<img src={postImg} alt="testing" />
			<span>{tag === 'Story' ? 'Blog Post' : tag}</span>
			<h3>{title}</h3>
			<ButtonLink>
				<span>Read {tag}</span>
			</ButtonLink>
		</NewPostContainer>
	);
}
