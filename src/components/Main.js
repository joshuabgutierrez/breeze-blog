import React from 'react';
import FeaturedPost from './FeaturedPost';
import AsidePosts from './AsidePosts';
import styled from 'styled-components';

const HomeSection = styled.div`
	margin-top: 2em;
	display: flex;
	justify-content: center;

	@media (max-width: 1260px) {
		flex-direction: column;
	}

	@media (max-width: 765px) {
		margin-top: 0;
	}
`;

export default function Main() {
	return (
		<HomeSection>
			<FeaturedPost isFeatured={true} />
			<AsidePosts />
		</HomeSection>
	);
}
