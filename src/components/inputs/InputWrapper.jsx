/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import React from "react";
import FlexBox from "../containers/FlexBox"
import { DoneButton, EditButton } from "../buttons/TextButtons";

const InputWrapper = ({ children, ...containerProps }) => {
  const [isInputEnabled, setIsInputEnabled] = useState(false);
  const [isButtonShown, setIsButtonShown] = useState(false);

  const handleDoneBtnClick = () => {
    setIsInputEnabled(false);
  }

  const handleEditBtnClick = () => {
    setIsInputEnabled(true);
  }

  const handleMouseEnter = () => {
    setIsButtonShown(true);
  }

  const handleMouseLeave = () => {
    setIsButtonShown(false);
  }

  const button = isInputEnabled ? <DoneButton fontSize='.8em' addCss={css`margin-right: .5rem`} onClick={handleDoneBtnClick} /> : <EditButton fontSize='.8em' addCss={css`margin-right: .5rem`} hide={!isButtonShown} onClick={handleEditBtnClick} />

  const addPropsToElement = (element, props) => {
    if (React.isValidElement(element)) {
      return React.cloneElement(element, props);
    }
    return element;
  }

  const addPropsToChildren = (children, props) => {
    if (Array.isArray(children)) {
      return children.map(el => addPropsToElement(el, props))
    }
    return addPropsToElement(children, props);
  }

  const inputEl = addPropsToChildren(children, { disabled: !isInputEnabled })

  return (
    <FlexBox
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...containerProps}
    >
      {button}
      {inputEl}
    </FlexBox>
  )
}

export default InputWrapper;