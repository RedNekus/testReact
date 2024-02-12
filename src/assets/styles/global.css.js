import { createGlobalStyle } from 'styled-components'
import vars from '@/assets/styles/vars'
import { rgba, maxWidth } from '@/assets/styles/mixins.css.js'

export default createGlobalStyle`
    html, body, div, span, object, iframe, h1, h2, h3, h4, h5,
    h6, p, blockquote, pre, a, abbr, address, big,
    cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small,
    strong, sub, sup, var, b, u, i, dl, dt,
    dd, ol, ul, li, fieldset, form, label, legend, table, caption,
    tbody, tfoot, thead, tr, th, td, article, aside, canvas, details,
    embed, figure, figcaption, footer, header, hgroup, menu, nav,
    output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    }

    div, input, textarea, select, button,
	h1, h2, h3, h4, h5, h6, a, span {
		outline: none;
    }

    sup {
        vertical-align: super;
    }
        
    sub {
        vertical-align: sub;
    }

    strong, b {
		font-weight: bold;
    }

    textarea {
		overflow: auto;
		resize: none;
    }

    table {
		border-spacing: 0;
		border-collapse: collapse;
		width: 100%;
    }

    a {
		color: inherit;
		text-decoration: none;
    }

    ul, ol {
		list-style-type: none;
    }

	img, fieldset, a img {
		border: none;
    }

    input, button {
		margin: 0;
		padding: 0;
		border: 0;
		border: none;
		border-radius: 0;
    }

	input, textarea, select, button {
		font-family: inherit;
		line-height: inherit;
    }

    input {
        box-shadow : none;
        font-size: 16px;
    }

    input::-ms-clear {
        display: none;
    }

	input[type="text"], input[type="email"],
	input[type="tel"], input[type="search"],
    input[type="number"], textarea,
    input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
    }

	input[type="submit"], button {
		background-color: transparent;
		cursor: pointer;
    }

	input::-webkit-contacts-auto-fill-button {
		visibility: hidden;
		display: none !important;
		pointer-events: none;
		position: absolute;
		right: 0;
    }

	input[type="number"] {
		-moz-appearance: textfield;
    }

    input[type='submit'] {
        appearance: none;
    }

    input::-webkit-clear-button,
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    svg {
        display: inline-block;
        max-width: 100%;
        max-height: 100%;
        overflow: visible;
    }

    button {
        background: 0 0;
    }

    ul li > a {
        display: inline-block;
        width: 100%;
    }

    img {
        display: block;
        max-width: 100%;
    }

    template {
        display: none !important;
    }

    html {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        -webkit-text-size-adjust: none;
        -webkit-overflow-scrolling: touch;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 100%;
        line-height: 1.4;
        letter-spacing: 0.35px;
        scroll-behavior: smooth;
    }

    *, *:before, *:after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        -webkit-user-drag: none;
    }
    
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: rgba(70,75,103,.35);
    }
    ::-moz-placeholder { /* Firefox 19+ */
      color: rgba(70,75,103,.35);
    }
    :-ms-input-placeholder { /* IE 10+ */
      color: rgba(70,75,103,.35);
    }
    :-moz-placeholder { /* Firefox 18- */
      color: rgba(70,75,103,.35);
    }

    body {
        width: 100%;
        min-height: 100%;
        font-family: ${vars.fonts.Roboto};
        font-weight: 300;
        color: ${vars.theme.black};
    }
    body.overflow {
        overflow: hidden;
    }

    body.ReactModal__Body--open {
        overflow: hidden;
    }
    
    .ReactModalPortal {
        position: relative;
        z-index: 6;
    }
    
    .ReactModal__Overlay {
        opacity: 0;
        transition: opacity .3s ease-in-out;
    }
    
    .ReactModal__Content {
        padding: 0px !important;
        border-radius: 8px !important;
        background: #fff;
        ${maxWidth(vars.breakpoints.mTablet)`
        `}
    }
    
    .ReactModal__Overlay--after-open{
        opacity: 1;
    }
    
    .ReactModal__Overlay--before-close{
        opacity: 0;
    }
    
    div::-webkit-scrollbar{
        width: 3px;
        height: 0;
    }
    
    ::-webkit-scrollbar-track {
        background-color: #ccc;
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 0px;
        background-color: #666;
    }
    
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
    
    .input-range {
        height: 3px;
        ${maxWidth(vars.breakpoints.mTablet)`
            display: none;
        `}
    }
    
    .input-range__track {
        height: 2px;
        background: ${vars.theme.outlineGrey};
        border-radius: 0 0 5px 5px;
        // transition: left 0.1s ease-out, width 0.1s ease-out;
        transition: left 0s, width 0s;
    }
    
    .input-range__track--active {
        height: 3px;
        background: ${vars.theme.red};
    }
    
    .input-range__slider {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        margin-top: -13px;
        background: rgba(255,255,255,0);
        border-color: rgba(255,255,255,0);
        // background: radial-gradient(circle, rgba(255,255,255,1) 56%, rgba(241,80,69,1) 56%);
        &:active {
            transform: scale(1.1);
        }
        &:before {
            content: '';
            width: 18px;
        height: 18px;
        border: 4px solid ${vars.theme.red};
        background: #fff;
        border-radius: 50%;
        }
    }
    
    .input-range__slider-container {
        // transition: left 0.1s ease-out;
        transition: none;
    }
    
    .input-range__label--value {
        display: none;
    }
    
    .input-range__label-container, .input-range__label--max .input-range__label-container {
        left: 0;
        font-family: ${vars.fonts.Roboto};
        font-size: 12px;
        line-height: 16px;
    }
    
    ymaps[class*="tail"] {
        display: none;
    }
    
    .DayPicker__hidden {
        visibility: visible;
    }
    
    .DayPicker__withBorder {
        box-shadow: none;
        left: -16px;
        
        ${maxWidth(vars.breakpoints.mTablet)`
            left: 0;
            margin: 0 auto;
        `}
        
        ${maxWidth(360)`
            left: 50%;
            transform: translateX(-50%);
            margin: 0;
        `}
    }
    
    .DayPickerKeyboardShortcuts_show__bottomRight {
        display: none;
    }
    
    .CalendarDay {
        vertical-align: middle;
        border-color: transparent;
    }
    
    .CalendarDay__default:hover {
        background: rgba(241, 80, 69, 0.15);
        border-color: transparent;
    }
    
    .CalendarDay__hovered_span, .CalendarDay__hovered_span:hover {
        background: rgba(241, 80, 69, 0.15);
        border-color: transparent;
    }
    
    .CalendarDay__selected, .CalendarDay__selected:active, .CalendarDay__selected:hover {
        background: #F15045;
        border: 1px solid #F15045;
    }
    
    .CalendarDay__selected_span {
        background: rgba(241, 80, 69, 0.15);
        color: #1A1C21;
    }
    
    .CalendarDay__selected_span:active, .CalendarDay__selected_span:hover {
        background: rgba(241, 80, 69, 0.15);
        color: #F15045;
    }
    
    .CalendarDay__blocked_calendar, .CalendarDay__blocked_calendar:active, .CalendarDay__blocked_calendar:hover {
        background: #fff;
        border: transparent;
        color: ${vars.theme.grey};
    }
    
    ${maxWidth(vars.breakpoints.mMobile)`
        .__jivoMobileButton {
            display: none !important;
        }
    `}
    
    ${maxWidth(vars.breakpoints.tablet)`
        .page-transition-enter [class*="StyledContacts__Actions"] {
            opacity: 0;
          }
          .page-transition-enter-active [class*="StyledContacts__Actions"] {
            opacity: 1;
            transition: opacity 200ms;
          }
    `}
`
