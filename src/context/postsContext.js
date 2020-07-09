import React from 'react';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import smartphone from '../images/smartphone.jpg';
import { createContext } from 'react';

const initialPosts = {
	mainPosts: [
		{
			id: 0,
			tag: 'Report',
			title: 'Explore Instagram Video: How to convert, engage, and get more Instagra...',
			postImg: img1
		},
		{
			id: 1,
			tag: 'Story',
			title: 'How to make social video work for your marketing team',
			postImg: img2
		},
		{
			id: 2,
			tag: 'Webinar',
			title: 'The Video Forecast: 2020 predictions from Industry leaders',
			postImg: img3
		},
		{
			id: 3,
			tag: 'Report',
			title: 'Winning strategies for digital video',
			postImg: img4
		}
	],
	newPosts: [
		{
			id: 4,
			tag: 'Story',
			title: '4 organic ways to improve your website KPIs',
			postImg: img5
		},
		{
			id: 5,
			tag: 'Story',
			title: 'How to turn your next event into a video content goldmine',
			postImg: img6
		},
		{
			id: 6,
			tag: 'Story',
			title: 'How to quickly turn your podcast into a video script',
			postImg: img7
		}
	],
	featuredPosts: {
		id: 7,
		tag: 'Story',
		title: 'How to optimize your Facebook & Instagram video ads for success',
		excerpt:
			'Instagram and Facebook video ads are extremely popular among marketers these days. Not only are they more engaging and entertaining, they are loved by many ...',
		postImg: smartphone
	}
};

// Create context
export const PostsContext = createContext(initialPosts);

// Context Provider
export const PostsContextProvider = ({ children }) => {
	return <PostsContext.Provider value={initialPosts}>{children}</PostsContext.Provider>;
};
