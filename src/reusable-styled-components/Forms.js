import styled from 'styled-components';

export const FormContainer = styled.div`
	width: 100%;
	max-width: 380px;
	height: 400px;
	margin: auto;
	text-align: center;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;

	& div {
		display: flex;
		justify-content: space-between;
	}
`;

export const StyledInput = styled.input`
	padding: 15px 10px;
	outline-color: ${({ theme }) => theme.colors.electricBlue};
	margin: 0.7em 0;
	border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Span = styled.span`
	display: inline-block;
	margin-top: 1em;
`;
