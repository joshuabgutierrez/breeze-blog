import React from 'react';
import styled from 'styled-components';
import ButtonLink from '../reusable-styled-components/ButtonLink';

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

const PostTag = styled.span`
	font-size: 0.9rem;
	font-weight: bold;
	color: ${(props) => {
		switch (props.color) {
			case 'Story':
				return props.theme.colors.electricBlue;
			case 'Report':
				return props.theme.colors.report;
			case 'Webinar':
				return props.theme.colors.wesbos;
			default:
				return;
		}
	}};
`;

const PostTitle = styled.h3`font-size: 1.25rem;`;

export default function SingleAsidePost({ tag, title, postImg }) {
	return (
		<SinglePostContainer>
			<StyledPostImage src={postImg} alt="" />
			<RightContainer>
				<PostTag color={tag}>{tag === 'Story' ? 'Blog Post' : tag}</PostTag>
				<PostTitle>{title}</PostTitle>
				<ButtonLink>
					<span>Read {tag}</span>
				</ButtonLink>
			</RightContainer>
		</SinglePostContainer>
	);
}
