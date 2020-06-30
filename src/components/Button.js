import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	border: none;
	border-radius: 5px;
	color: #fff;
	font-size: 1rem;
	background-color: ${({ theme: { colors } }) => colors.electricBlue};
	padding: 0.5em 1em;
	cursor: pointer;
`;

export default Button;
