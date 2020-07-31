import styled from 'styled-components';

const Button = styled.button`
	border: none;
	border-radius: 5px;
	color: #fff;
	font-size: 0.8rem;
	font-weight: bold;
	background-color: ${({ theme: { colors } }) => colors.electricBlue};
	padding: 0.8em 1.2em;
	cursor: pointer;
	width: 100%;
	margin: ${(props) => props.margin}em 0;
`;

export default Button;
