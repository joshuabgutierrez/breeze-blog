import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	padding: 0.5em 0;
	text-align: center;
	color: #fff;
	background-color: ${({ theme: { colors } }) => colors.electricBlue};
	width: 100%;
	margin-top: 2em;
	position: absolute;
	top: 100%;
`;

export default function Footer() {
	return (
		<StyledFooter>
			<p>Breeze blog &copy; 2020</p>
		</StyledFooter>
	);
}
