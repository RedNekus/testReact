import styled, {css} from 'styled-components'
import vars from '@/assets/styles/vars'
import { maxWidth } from '@/assets/styles/mixins.css'

const Text = styled.div`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.35px;
    ${p => p.grey && `color: ${vars.theme.darkGrey};`}
    ${p => p.white && `color: #fff;`}
    ${p => p.lightGrey && `color: ${vars.theme.grey};`}
    
    ${p => !p.noFormat && css`
        h2 {
            margin-bottom: 8px;
            font-size: 32px;
            line-height: 40px;
            font-weight: 500;
            ${maxWidth(vars.breakpoints.tablet)`
                font-size: 24px;
                line-height: 32px;
            `}
        }
        
        h3 {
            margin-bottom: 8px;
            font-size: 24px;
            line-height: 32px;
            letter-spacing: 0.2px;
            font-weight: 500;
            ${maxWidth(vars.breakpoints.tablet)`
                font-size: 20px;
                line-height: 28px;
            `}
        }
        
        h4 {
            margin-bottom: 8px;
            font-size: 20px;
            line-height: 28px;
            letter-spacing: 0.2px;
            font-weight: 400;
        }
        
        h5, h6 {
            margin-bottom: 8px;
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
        }
        
        p, ul, ol {
            margin-bottom: 16px;
        }
        
        ul {
            padding-left: 18px;
            list-style-type: initial;
        }
        
        ol {
            padding-left: 18px;
            list-style-type: decimal;
        }
        
        img {
            width: 100%;
            height: initial;
            margin: 28px 0;
        }
        
        a {
            color: ${vars.theme.red};
            text-decoration: underline;
            transition: 0.3s;
            &:hover {
                opacity: 0.8;
                text-decoration: none;
            }
        }
    `}
`

export default Text
