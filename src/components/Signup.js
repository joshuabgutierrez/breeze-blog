import React from 'react';
import { Lock } from '@styled-icons/boxicons-solid/Lock';
import { Link } from 'react-router-dom';
import { StyledInput, FormContainer, Form, Span } from '../reusable-styled-components/Forms';
import Button from '../reusable-styled-components/Button';

function Signup() {
	return (
		<FormContainer>
			<header>
				<Lock size="30" />
				<h3>Sign Up</h3>
			</header>
			<Form>
				<div>
					<StyledInput type="text" placeholder="First Name*" />
					<StyledInput type="text" placeholder="Last Name*" />
				</div>
				<StyledInput type="email" placeholder="Email Address*" />
				<StyledInput type="password" placeholder="Password*" />
				<Button>Sign Up</Button>
			</Form>
			<Link to="/signin">
				<Span>Already have an account? Sign In</Span>
			</Link>
		</FormContainer>
	);
}

export default Signup;
