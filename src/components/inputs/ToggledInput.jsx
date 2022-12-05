/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import FlexBox from "../containers/FlexBox";
import {EditButton, DoneButton} from '../buttons/TextButtons';
import { showChildrenOnHover } from "../../utility/stylesAndBehaviors";

const ToggledInput = ({ type, name, id, value, addCss, onChange, disabled, placeholder}) => {
  const [isInputEnabled, setIsInputEnabled] = useState(!disabled && true);

  const inputRef = useRef();

  useEffect(() => {
    if (type === 'text') {
      inputRef.current.focus();
    }
  })

  const onEditButtonClick = () => {
    setIsInputEnabled(true);
  }

  const onSaveButtonClick = () => {
    setIsInputEnabled(false);
  }

  const button = isInputEnabled ? <DoneButton fontSize='.8em' addCss={css`margin-right: 5px;`} onClick={onSaveButtonClick} /> : <EditButton fontSize='.8em' addCss={css`margin-right: 5px;`} onClick={onEditButtonClick} hide showOnHover/>;

  return (
    <FlexBox
      justifyContent='start'
      alignItems='center'
      behavior={showChildrenOnHover}
      addCss={css`
      height: 22px;
      margin-bottom: .5rem;
    `} >
      {button}
      <input
        css={css`
          font-size: 1.4rem;
          border: none;
          background-color: transparent;
          outline: none;
          ${addCss};
          &:disabled {
            color: unset;
          }
          &[type="month"] {
            font: unset;
            width: 12.5rem;
          }
        `}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={!isInputEnabled}
        onChange={onChange}
        ref={inputRef} />
    </FlexBox>
  )
}

export default ToggledInput;