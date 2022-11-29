/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const PillButton = ({ children, onClick }) => {
  return (
    <button css={css`
    background-color: #EEE;
    padding: 12px 20px;
    border-radius: 23px;
    font-size: 1.6em;
    border: none;
    margin: 2px;
    &:hover {
      cursor: pointer;
      filter: brightness(105%);
    }
    `}
      onClick={onClick}>{children}</button>
  )
}

export default PillButton;