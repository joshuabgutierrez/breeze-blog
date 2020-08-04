import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledToggler = styled.div`
	padding: 0;
	display: none;
	cursor: pointer;
	width: 55px;
	height: 55px;
	border-radius: 50%;
	background: ${(props) => props.theme.colors.electricBlue};
	z-index: 1;

	@media (max-width: 675px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	& div {
		margin: 0.15em 0;
		background-color: #ffffff;
		width: 2rem;
		height: 0.25rem;
		border-radius: 5px;
		transform-origin: 3px;
		transition: all 0.3s linear;
		margin-left: ${({ open }) => open && '0.4em'};

		&:nth-child(1) {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}
		&:nth-child(2) {
			transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;

function Toggler() {
	const [ isOpen, setIsOpen ] = useState(false);
	return (
		<React.Fragment>
			<StyledToggler open={isOpen} onClick={() => setIsOpen(!isOpen)}>
				<div />
				<div />
				<div />
			</StyledToggler>
			<RightNav open={isOpen} />
		</React.Fragment>
	);
}

export default Toggler;
