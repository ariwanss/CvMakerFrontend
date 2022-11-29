/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Button = ({ children, addCss, height, width, fontSize, onClick, hide }) => {
  return (
    <button
    className='showOnHover'
    css={
      css`
      display: ${hide ? 'none' : 'block'};
      height: ${height};
      width: ${width};
      font-size: ${fontSize};
      border: none;
      border-radius: ${fontSize};
      padding: 5px;
      ${addCss};
      &:hover {
        filter: brightness(105%);
      }
      &:active {
        filter: brightness(90%);
      }
      `
    }
    onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;