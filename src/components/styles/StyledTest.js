import styled, { css } from 'styled-components'
import { StyledText } from '@/components/styles'
import { maxWidth, minWidth, rgba } from '@/assets/styles/mixins.css.js'
import vars from '@/assets/styles/vars'

const Test = styled.div`
	.is-hidden {
		display: none;
	}
	input[type='radio'] {
		display:none;
	}
	button {
		border: 0;
	}
`;

Test.Body = styled(StyledText)`
	ul {
		list-style: none;
		padding: 0;
		padding: 0;
	}
`;

Test.Item = styled.div`
	padding: 24px;
	border-radius: 8px;
	background: rgb(255, 255, 255);
	transition: all 0.3s ease 0s;
	border: medium;
	border-color: ${vars.theme.outlineGrey};
	box-shadow: rgba(61, 75, 86, 0.12) 0px 0px 1px, rgba(61, 75, 86, 0.1) 0px 4px 32px;
	margin-bottom: 1rem;
	h3 {
		margin-top: 0;
	}
`;

Test.Answers = styled.ul`
`;

Test.Answer = styled.li`
	border-width: 2px;
	border-style: solid;
	border-color: transparent;
	padding: .6rem .4rem;
	margin: .2rem 0;
	&.correct {
		border-color: ${vars.theme.blue};
		background: ${vars.theme.outlineGrey};
		&.is-checked label:after {
	        background: ${vars.theme.blue};
		}
	}
	&.error {
		border-color: ${vars.theme.red};
		border-style: dotted;
	}
	&:hover {
		background: ${vars.theme.outlineGrey};
	}
`
Test.Result = styled.div`
`

Test.Label = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    transition: .2s;
    
    ${p => p.type === 'list' && css`
        &:not(:last-child) {
            margin-bottom: 16px;
        }
        padding-left: 36px;
        &:before {
            position: absolute;
            left: 0;
            display: inline-block;
            content: '';
            width: 24px;
            height: 24px;
            background: #fff;
            border: 1px solid ${vars.theme.outlineGrey};
            border-radius: 50%;
        }
        &:after {
            content: '';
            position: absolute;
            top: calc(50% - 6px);
            left: 7px;
            display: block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: ${p => p.checked ? vars.theme.red : "transparent"};
            transition: .2s;
        }
    `}
 `

export default Test