import React from 'react';
import johndoe from '../images/johndoe.jpg';
import mainPost from '../images/mainPost.jpg';
import firstPost from '../images/firstPost.jpg';
import secondPost from '../images/secondPost.jpg';
import thirdPost from '../images/thirdPost.jpg';
import fourthPost from '../images/fourthPost.jpg';
import firstReport from '../images/firstReport.jpg';
import secondReport from '../images/secondReport.jpg';
import firstWebinar from '../images/firstWebinar.jpg';
import { createContext } from 'react';

const data = {
	articles: [
		{
			tag: 'Blog Post',
			id: 1,
			title: 'How to optimize your Facebook & Instagram video ads for success',
			postImg: mainPost,
			content:
				'Instagram and Facebook video ads are extremely popular among marketers these days. Not only are they more engaging and entertaining, they are loved by many entrepreneurs becase it allows to reach out to more people and convince them to buy their products. If you want to reach all your target audience members and outpace your competition, you’ll need to optimize your campaigns both before and after publishing them on Facebook. The good news is that this time and effort will be worth your while. So what are these 10 powerful Facebook ad optimization hacks I’m talking about? Read on and find out!',
			author: 'John Doe',
			authorImage: johndoe,
			authorTitle: 'Maketing Specialist',
			authorSocialNetworks: {
				linkedin: 'https://www.linkedin.com/',
				twitter: 'https://www.twitter.com/'
			},
			postedDate: 'Jul 15, 2020',
			isFeatured: true
		},
		{
			tag: 'Blog Post',
			id: 2,
			title: 'How to make social video work for your marketing team',
			postImg: firstPost,
			content:
				'Instagram and Facebook video ads are extremely popular among marketers these days. Not only are they more engaging and entertaining, they are loved by many entrepreneurs becase it allows to reach out to more people and convince them to buy their products.',
			author: 'John Doe',
			authorImage: johndoe,
			authorTitle: 'Maketing Specialist',
			authorSocialNetworks: {
				linkedin: 'https://www.linkedin.com/',
				twitter: 'https://www.twitter.com/'
			},
			postedDate: 'Jul 15, 2020'
		},
		{
			tag: 'Blog Post',
			id: 3,
			title: '4 organic ways to improve your website KPIs',
			postImg: secondPost,
			content:
				'Instagram and Facebook video ads are extremely popular among marketers these days. Not only are they more engaging and entertaining, they are loved by many entrepreneurs becase it allows to reach out to more people and convince them to buy their products.',
			author: 'John Doe',
			authorImage: johndoe,
			authorTitle: 'Maketing Specialist',
			authorSocialNetworks: {
				linkedin: 'https://www.linkedin.com/',
				twitter: 'https://www.twitter.com/'
			},
			postedDate: 'Jul 15, 2020'
		},
		{
			tag: 'Blog Post',
			id: 4,
			title: 'How to turn your next event into a video content goldmine',
			postImg: thirdPost,
			content:
				'Instagram and Facebook video ads are extremely popular among marketers these days. Not only are they more engaging and entertaining, they are loved by many entrepreneurs becase it allows to reach out to more people and convince them to buy their products.',
			author: 'John Doe',
			authorImage: johndoe,
			authorTitle: 'Maketing Specialist',
			authorSocialNetworks: {
				linkedin: 'https://www.linkedin.com/',
				twitter: 'https://www.twitter.com/'
			},
			postedDate: 'Jul 15, 2020'
		},
		{
			tag: 'Blog Post',
			id: 5,
			title: 'How to quickly turn your podcast into a video script',
			postImg: fourthPost,
			content:
				'Instagram and Facebook video ads are extremely popular among marketers these days. Not only are they more engaging and entertaining, they are loved by many entrepreneurs becase it allows to reach out to more people and convince them to buy their products.',
			author: 'John Doe',
			authorImage: johndoe,
			authorTitle: 'Maketing Specialist',
			authorSocialNetworks: {
				linkedin: 'https://www.linkedin.com/',
				twitter: 'https://www.twitter.com/'
			},
			postedDate: 'Jul 15, 2020'
		}
	],
	reports: [
		{
			tag: 'Report',
			id: 6,
			title: 'Explore Instagram Video: How to convert, engage, and get more Instagra...',
			postImg: firstReport,
			content:
				'Instagram and Facebook video ads are extremely popular among marketers these days. Not only are they more engaging and entertaining, they are loved by many entrepreneurs becase it allows to reach out to more people and convince them to buy their products.',
			author: 'John Doe',
			authorImage: johndoe,
			authorTitle: 'Maketing Specialist',
			authorSocialNetworks: {
				linkedin: 'https://www.linkedin.com/',
				twitter: 'https://www.twitter.com/'
			},
			postedDate: 'Jul 15, 2020'
		},
		{
			tag: 'Report',
			id: 7,
			title: 'Winning strategies for digital video',
			postImg: secondReport,
			content:
				'Instagram and Facebook video ads are extremely popular among marketers these days. Not only are they more engaging and entertaining, they are loved by many entrepreneurs becase it allows to reach out to more people and convince them to buy their products.',
			author: 'John Doe',
			authorImage: johndoe,
			authorTitle: 'Maketing Specialist',
			authorSocialNetworks: {
				linkedin: 'https://www.linkedin.com/',
				twitter: 'https://www.twitter.com/'
			},
			postedDate: 'Jul 15, 2020'
		}
	],
	webinars: [
		{
			tag: 'Webinar',
			id: 8,
			title: 'The Video Forecast: 2020 predictions from industry leaders',
			postImg: firstWebinar,

			content:
				'Instagram and Facebook video ads are extremely popular among marketers these days. Not only are they more engaging and entertaining, they are loved by many entrepreneurs becase it allows to reach out to more people and convince them to buy their products.',
			author: 'John Doe',
			authorImage: johndoe,
			authorTitle: 'Maketing Specialist',
			authorSocialNetworks: {
				linkedin: 'https://www.linkedin.com/',
				twitter: 'https://www.twitter.com/'
			},
			postedDate: 'Jul 15, 2020'
		}
	]
};

// Create context
export const PostsContext = createContext(data);

// Context Provider
export const PostsContextProvider = ({ children }) => {
	return <PostsContext.Provider value={data}>{children}</PostsContext.Provider>;
};
