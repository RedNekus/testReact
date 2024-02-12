import { css } from 'styled-components'

export const maxWidth = (breakpoint) => {
    return function (...args) {
        return css`
            @media only screen and (max-width: ${breakpoint}px) {
                ${css(...args)};
            }
        `
    }
}

export const minWidth = (breakpoint) => {
    return function (...args) {
        return css`
            @media only screen and (min-width: ${breakpoint}px) {
                ${css(...args)};
            }
        `
    }
}

export const minMaxWidth = (breakpointMin, breakpointMax) => {
    return function (...args) {
        return css`
            @media only screen and (min-width: ${breakpointMin}px) and (max-width: ${breakpointMax}px) {
                ${css(...args)};
            }
        `
    }
}

export const rgba = (hex, alpha) => {
    const rgb = hexToRgb(hex)
    return `rgba(${rgb}, ${alpha})`
}

function hexToRgb(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
    if (!match) {
        return [0, 0, 0]
    }
    let colorString = match[0]
    if (match[0].length === 3) {
        colorString = colorString
            .split('')
            .map((char) => {
                return char + char
            })
            .join('')
    }

    const integer = parseInt(colorString, 16)
    const r = (integer >> 16) & 0xff
    const g = (integer >> 8) & 0xff
    const b = integer & 0xff

    return [r, g, b]
}
