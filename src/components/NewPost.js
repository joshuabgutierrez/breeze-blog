import React from 'react';
import ButtonLink from '../reusable-styled-components/ButtonLink';
import styled from 'styled-components';
import PostTag from '../reusable-styled-components/PostTag';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const NewPostContainer = styled.div`
	width: 100%;
	max-width: 500px;
	margin: 2em auto;
	display: flex;
	flex-direction: column;
	align-items: center;

	& img {
		width: 100%;
		max-width: 350px;
		border-radius: 5px;
	}

	& h3 {
		max-width: 80%;
	}
`;

export default function NewPost(article) {
	const { postImg, tag, title } = article;
	const history = useHistory();
	return (
		<Grid item sm={12} md={6} lg={4}>
			<NewPostContainer>
				<img src={postImg} alt="testing" />
				<PostTag color={tag} marginTop="mt-1">
					{tag === 'Story' ? 'Article' : tag}
				</PostTag>
				<h3>{title}</h3>
				<ButtonLink
					onClick={() =>
						history.push({
							pathname: '/post',
							state: { ...article }
						})}
				>
					<span>Read {tag === 'Blog Post' ? 'Article' : tag}</span>
				</ButtonLink>
			</NewPostContainer>
		</Grid>
	);
}
