import styled, {css, keyframes} from 'styled-components'
import {maxWidth} from '@/assets/styles/mixins.css.js'
import vars from '@/assets/styles/vars'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Button = styled.button`
  position: relative;
  display: block;
  flex-shrink: 0;
  padding: ${p => p.sizeS ? "12px" : "16px 12px"};
  border-radius: 4px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.2px;
  outline: none;
  cursor: pointer;
  transition: 0.25s ease-out;
      
  ${(p) =>
    p.noLeftBorderRadius &&
    css`
          border-radius: 0 4px 4px 0;
      `}
  
  ${(p) =>
    p.mr &&
    css`
          margin-right: ${p.mr}px;
      `}
  
  ${(p) =>
    p.ml &&
    css`
          margin-left: ${p.ml}px;
      `}
  
  ${(p) =>
    p.center &&
    css`
          margin: 0 auto;
      `}
      
    &::after {
        content: '';
        position: absolute;
        right: 15px;
        top: calc(50% - 9px);
        width: 18px;
        height: 18px;
        border: 3px solid currentColor;
        border-left-color: transparent;
        border-radius: 50%;
        opacity: ${p => p.isLoading ? 1 : 0};
        transition: opacity 0.5s ease;
        pointer-events: none;
        animation: ${rotate} 1s linear infinite;
        ${p => p.noMobileLoading && css`
            ${maxWidth(vars.breakpoints.mMobile)`
                right: 8px;
            `}
            ${maxWidth(vars.breakpoints.sMobile - 1)`
                opacity: 0;
            `}
        `}
    }
      
    &::before {
        content: '';
        position: absolute;
        left: 15px;
        top: calc(50% - 9px);
        width: 8px;
        height: 14px;
        border-bottom: 1px solid currentColor;
        border-right: 1px solid currentColor;
        transform: rotate(45deg);
        opacity: ${p => p.success ? 1 : 0};
        transition: opacity 0.5s ease;
        pointer-events: none;
        ${maxWidth(vars.breakpoints.mMobile)`
            left: 0;
        `}
        ${maxWidth(vars.breakpoints.sMobile - 1)`
            left: -10px;
        `}
    }
    
    a {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;    
    }
  
  ${({width}) => {
    switch (width) {
        case 'full':
            return css`
                  width: 100%;
              `
        case 'x-large':
            return css`
                  width: 360px;
              `
        case 'large':
            return css`
                  width: 280px;
              `
        case 'medium':
            return css`
                  width: 180px;
              `
        case 'small':
            return css`
                  width: 160px;
              `
        case 'x-small':
            return css`
                  width: 148px;
              `
        default:
            return css`
                  width: 220px;
`
    }
}}
  
  ${({bg}) => {
    switch (bg) {
        case 'grey':
            return css`
                  background: ${vars.theme.lightGrey};
                  color: ${p => p.redText ? "#E74F44" : vars.theme.black};
                  &:hover {
                    background: #E9EEF6;
                  }
                  &:active {
                    background: #F6F8FC;
                  }
                  &:disabled {
                    color: ${vars.theme.grey};
                  }
              `
        case 'white':
            return css`
                  background: #fff;
                  border: 1px solid ${vars.theme.outlineGrey};
                  &:hover {
                    box-shadow: 0px 0px 1px rgba(61, 75, 86, 0.12), 0px 4px 22px rgba(61, 75, 86, 0.08);
                  }
                  &:active {
                    color: ${vars.theme.grey};
                  }
                  &:disabled {
                    background: ${vars.theme.lightGrey};
                    color: ${vars.theme.grey};
                  }
              `
        case 'transparent':
            return css`
                  background: transparent;
                  color: #fff;
                  ${maxWidth(vars.breakpoints.mTablet)`
                    background: rgba(255, 255, 255, 0.15);
                  `}
              `
        default:
            return css`
                  background: ${p => p.success ? "#fff" : vars.theme.red};
                  color: ${p => p.success ? vars.theme.red : "#fff"};
                  ${p => !p.success && css`
                      &:hover {
                        box-shadow: 0px 2px 32px rgba(168, 11, 0, 0.16);
                      }
                  `}
                  &:active {
                    background: #E74F44;
                  }
                  &:disabled {
                    background: ${vars.theme.grey};
                    &:hover {
                        box-shadow: none;
                      }
                  }
`
    }
}}
  
  ${maxWidth(vars.breakpoints.tablet - 1)`
    width: ${p => p.width === "xx-small" ? '56px' : "100%"};
    max-width: ${(p) => (p.width === "full" ? '100%' : p.width === "small" ? '160px' : p.width === "xx-small" ? '56px' : '220px')};
    padding: 14px 5px;
    font-size: 14px;
  `}
  ${maxWidth(vars.breakpoints.mobile)`
        max-width: ${(p) => (p.width === "small" ? '160px' : p.width === "xx-small" ? '56px' : '100%')};
    `}
`

export default Button
