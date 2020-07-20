import React from 'react';
import { FormContainer, StyledInput, Form, Span } from '../reusable-styled-components/Forms';
import { Lock } from '@styled-icons/boxicons-solid/Lock';
import Button from '../reusable-styled-components/Button';
import { Link } from 'react-router-dom';

function Signin() {
	return (
		<FormContainer>
			<header>
				<Lock size="30" />
				<h3>Sign Up</h3>
			</header>
			<Form>
				<StyledInput type="email" placeholder="Email Address*" />
				<StyledInput type="password" placeholder="Password*" />
				<Button>Sign In</Button>
			</Form>
			<Link to="/signup">
				<Span>Don't have an account? Sign Up</Span>
			</Link>
		</FormContainer>
	);
}

export default Signin;
