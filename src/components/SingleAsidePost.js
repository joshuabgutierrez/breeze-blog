import React from 'react';
import styled from 'styled-components';
import ButtonLink from './ButtonLink';

const SinglePostContainer = styled.div`
	margin-bottom: 2em;
	display: flex;
`;

const StyledPostImage = styled.img`
	width: 100%;
	max-width: 170px;
	height: 150px;
	border-radius: 5px;
`;

const RightContainer = styled.div`
	margin-left: 1em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export default function SingleAsidePost({ tag, title, postImg }) {
	return (
		<SinglePostContainer>
			<StyledPostImage src={postImg} alt="" />
			<RightContainer>
				<span>{tag}</span>
				<h3>{title}</h3>
				<ButtonLink>Read</ButtonLink>
			</RightContainer>
		</SinglePostContainer>
	);
}
