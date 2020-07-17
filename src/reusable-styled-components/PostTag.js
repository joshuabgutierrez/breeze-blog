import styled from 'styled-components';

const PostTag = styled.span`
	font-size: 0.9rem;
	font-weight: bold;
	color: ${(props) => {
		switch (props.color) {
			case 'Blog Post':
				return props.theme.colors.electricBlue;
			case 'Report':
				return props.theme.colors.report;
			case 'Webinar':
				return props.theme.colors.wesbos;
			default:
				return;
		}
	}};
	margin-top: ${(props) => (props.marginTop === 'mt-1' ? '10px' : '0')};
`;

export default PostTag;
