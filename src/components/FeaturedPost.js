import React from 'react';
import smartphone from '../images/smartphone.jpg';
import Button from '../reusable-styled-components/Button';
import styled from 'styled-components';

const MainPost = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 600px;

	img {
		border-radius: 5px;
		height: 400px;
	}
`;

const Tag = styled.span`
	color: ${({ theme: { colors } }) => colors.electricBlue};
	font-weight: bold;
	font-size: 0.9rem;
	margin-top: 1em;
`;

const PostTitle = styled.h3`
	font-weight: bold;
	font-size: 2.3rem;
	margin: 0;
	margin-top: 0.7em;
`;

const ButtonPost = styled(Button)`
	max-width: 120px;
	margin-top: 1.5em;
	padding: 1em 0;
`;

export default function FeaturedPost() {
	return (
		<MainPost>
			<img src={smartphone} alt="Taking pictures with a smartphone" />
			<Tag>Blog Post</Tag>
			<PostTitle>How to optimize your Facebook & Instagram video ads for success</PostTitle>
			<p>
				Instagram and Facebook video ads are extremely popular among marketers these days. Not only are they
				more engaging and entertaining, they are loved by many ...
			</p>
			<ButtonPost>Read Story</ButtonPost>
		</MainPost>
	);
}
