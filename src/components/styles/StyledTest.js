import styled, { css } from 'styled-components'
import { StyledText } from '@/components/styles'
import { maxWidth, minWidth, rgba } from '@/assets/styles/mixins.css.js'
import vars from '@/assets/styles/vars'

const Test = styled.div``;

Test.Body = styled(StyledText)`
	ul {
		list-style: none;
		padding: 0;
	}
`;

Test.Item = styled.div`
	border: 1px solid gray;
	border-radius: 1rem;
`;

Test.Answers = styled.ul`

`;

Test.Answer = styled.li`
	&.is-checked {
		border-width: 1px;
		border-style: solid;
		border-color: gray;
	}
	&.correct {
		border-color: green;
	}
	&.error {
		border-color: red;
	}
`
Test.Result = styled.div`
`

export default Test