import React from 'react';
import { Linkedin } from '@styled-icons/fa-brands/Linkedin';
import { TwitterSquare } from '@styled-icons/fa-brands/TwitterSquare';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledAuthorInfo = styled.div`
	display: flex;
	max-width: 60%;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	margin-top: 2em;
`;

const AuthorInfoLeft = styled.div`
	display: flex;
	align-items: center;
	margin-right: 2em;

	& > div {
		margin-left: 1em;

		& h3,
		& p {
			margin: 0;
		}

		& p {
			font-weight: bold;
			font-size: 0.9rem;
		}
	}
`;

const AuthorImage = styled.div`
	width: 100px;
	height: 100px;
	background-image: url(${(props) => props.image});
	border-radius: 50%;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
`;

const AuthorInfoRight = styled.div`
	display: flex;
	align-items: center;

	& h3 {
		font-size: 1rem;
		margin-right: 2em;
	}
`;

export default function AuthorInfo() {
	const history = useHistory();
	const { authorImage, authorSocialNetworks: { twitter, linkedin } } = history.location.state;
	return (
		<StyledAuthorInfo>
			<AuthorInfoLeft>
				<AuthorImage image={authorImage} />
				<div>
					<h3>John Doe</h3>
					<p>Software Engineer</p>
				</div>
			</AuthorInfoLeft>
			<AuthorInfoRight>
				<h3>Follow me on:</h3>
				<div>
					<a href={linkedin} rel="noopener noreferrer" target="_blank">
						<Linkedin size="30" />
					</a>
					<a href={twitter} rel="noopener noreferrer" target="_blank">
						<TwitterSquare size="30" />
					</a>
				</div>
			</AuthorInfoRight>
		</StyledAuthorInfo>
	);
}
