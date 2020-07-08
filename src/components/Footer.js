import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	margin: 4em auto 0 auto;
	padding: 0.5em 0;
	text-align: center;
	color: #fff;
	background-color: ${({ theme: { colors } }) => colors.electricBlue};
	width: 100%;
	max-width: 80%;
`;

export default function Footer() {
	return (
		<StyledFooter>
			<p>Breeze blog &copy; 2020</p>
		</StyledFooter>
	);
}
