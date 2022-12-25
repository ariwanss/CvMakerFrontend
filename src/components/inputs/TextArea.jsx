/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef } from "react";

const TextArea = ({ name, value, placeholder, onChange: handleChange, disabled, addCss }) => {
  const el = useRef();

  useEffect(() => {
    el.current.style = 'height: 0;';
    el.current.style = `height: ${el.current.scrollHeight}px`;
  })

  useEffect(() => {
    el.current.focus();
  })

  return (
    <textarea
      css={css`
        background-color: inherit;
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        resize: none;
        outline: none;
        border: none;
        width: 100%;
        ${addCss};`}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      id=""
      // cols="30"
      // rows="10"
      disabled={disabled}
      ref={el} >
    </textarea>
  )
}

export default TextArea;