/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const sizes = {
  small: {
    fontSize: '1.2rem',
    diameter: '30px'
  },
  medium: {
    fontSize: '1.6rem',
    diameter: '40px'
  },
  large: {
    fontSize: '2rem',
    diameter: '50px'
  }
}

const RoundButton = ({ children, small, medium, large, hide, inline, onClick, addCss }) => {
  const size = small ? 'small' : medium ? 'medium' : large ? 'large' : 'medium';
  return (
    <button
      css={css`border: none;
      border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin: 2px;
    font-size: ${sizes[size].fontSize};
    width: ${sizes[size].diameter};
    height: ${sizes[size].diameter};
    display: ${hide ? 'none' : inline ? 'inline-flex' : 'flex'};
    ${addCss};
    &:hover {
      cursor: pointer;
        filter: brightness(105%);
    }
      `} onClick={onClick}>{children}</button>
  )
}

export default RoundButton;