/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const FlexBox = ({ addCss, children, justifyContent, alignItems, column, row, inline, wrap, hide, behavior, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }) => {
  return (
    <div 
      css={css`
        display: ${hide ? 'none' : inline ? 'inline-flex' : 'flex'};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        flex-direction: ${column && 'column' || row && 'row'};
        flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
        ${addCss};
        ${behavior};
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >{children}</div>
  )
}

export default FlexBox;