import styled, {css} from 'styled-components'
import {maxWidth} from '@/assets/styles/mixins.css.js'
import vars from '@/assets/styles/vars'

const Title = styled.div`
  font-size: 32px;
    line-height: 40px;
    font-weight: 300;
  
  ${(p) =>
    p.large &&
    css`
        font-size: 40px;
        line-height: 52px;
      `}
      
  ${(p) =>
    p.small &&
    css`
          font-size: 24px;
          line-height: 32px;
          letter-spacing: 0.2px;
      `}
      
  ${p => p.white && "color: #fff;"}
  
  ${p => p.mt && `margin-top: ${p.mt}px;`}
      
  ${({mb}) => {
    switch (mb) {
        case 'medium':
            return css`
                  margin-bottom: 24px;
                  ${maxWidth(vars.breakpoints.tablet)`
                    margin-bottom: 16px;
                  `}
`
        case 'small':
            return css`
                  margin-bottom: 16px;
                  ${maxWidth(vars.breakpoints.mTablet)`
                    margin-bottom: 8px;
                  `}
              `
        case 'x-small':
            return css`
                  margin-bottom: 8px;
              `
        case 'none':
            return css`
                  margin-bottom: 0;
              `

        default:
            return css`
                  margin-bottom: 32px;
                  ${maxWidth(vars.breakpoints.tablet)`
                    margin-bottom: 24px;
                  `}
              `
    }
}}
  
  ${maxWidth(vars.breakpoints.tablet)`
    font-size: 24px;
    line-height: 32px;
    ${(p) =>
        p.large &&
        css`
              font-size: 32px;
              line-height: 40px;
          `}
    ${(p) =>
        p.small &&
        css`
              font-size: 20px;
              line-height: 28px;
          `}
  `}
  
  ${maxWidth(vars.breakpoints.mTablet)`
    ${(p) =>
        p.mobileMedium &&
        css`
              font-size: 24px;
              line-height: 32px;
          `}
     ${p => p.modal && "margin-right: 24px;"}
  `}
`

export default Title
