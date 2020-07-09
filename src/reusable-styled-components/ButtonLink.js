import styled from 'styled-components';

const ButtonLink = styled.a`
	color: #000;
	cursor: pointer;
	position: relative;
	font-weight: bold;
	font-size: 0.9rem;

	& > * {
		color: inherit;
	}

	span {
		border-bottom: 1.5px solid #000;
	}

	&:hover {
		color: ${({ theme: { colors } }) => colors.electricBlue};
	}
`;

export default ButtonLink;
