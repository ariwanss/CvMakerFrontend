/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Button = ({ children, addCss, height, width, fontSize, onClick, hide, showOnHover }) => {
  return (
    <button
    className={showOnHover && 'showOnHover'}
    css={
      css`
      display: ${hide ? 'none' : 'block'};
      height: ${height};
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