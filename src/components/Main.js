import React from 'react';
import FeaturedPost from './FeaturedPost';
import AsidePosts from './AsidePosts';
import styled from 'styled-components';

const HomeSection = styled.div`
	margin-top: 2em;
	display: flex;
	justify-content: center;
`;

export default function Main() {
	return (
		<HomeSection>
			<FeaturedPost />
			<AsidePosts />
		</HomeSection>
	);
}
