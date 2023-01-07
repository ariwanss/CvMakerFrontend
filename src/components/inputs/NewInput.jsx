/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useEffect } from "react";

const NewInput = ({ type, name, value, placeholder, onChange: handleChange, disabled, addCss }) => {
  const el = useRef();

  useEffect(() => {
    el.current.focus();
  })

  return (
    <input 
      css={css`
        background-color: inherit;
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        outline: none;
        border: none;
        width: 100%;
        ${addCss};  
      `}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      disabled={disabled}
      ref={el}
     />
  )
}

export default NewInput;