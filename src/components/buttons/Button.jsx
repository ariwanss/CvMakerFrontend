/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Button = ({ children, addCss, height, width, fontSize, onClick, hide }) => {
  return (
    <button
    css={
      css`
      display: ${hide ? 'none' : 'block'};
      height: ${height || 'min-content'};
      width: ${width};
      font-size: ${fontSize};
      border: none;
      border-radius: calc(2 * ${fontSize});
      padding: calc(.5 * ${fontSize}) ${fontSize};
      background-color: #eee;
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