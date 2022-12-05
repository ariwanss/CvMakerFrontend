/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import { showChildrenOnHover } from "../../../utility/stylesAndBehaviors";
import Button from "../../buttons/Button";
import { DoneButton, EditButton, DeleteButton } from "../../buttons/TextButtons";
import FlexBox from "../../containers/FlexBox";


const AddLink = ({ value, onChange, onLinkDelete }) => {
  const [isAddLinkBtnShown, setIsAddBtnShown] = useState(value ? false : true);
  const [isInputShown, setIsInputShown] = useState(value ? true : false);
  const [isInputEnabled, setIsInputEnabled] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  })

  const onAddLinkClick = () => {
    setIsInputShown(true);
    setIsAddBtnShown(false);
  }

  const onEditButtonClick = () => {
    setIsInputEnabled(true);
  }

  const onDoneButtonClick = () => {
    if (!value) {
      setIsAddBtnShown(true);
      setIsInputEnabled(true);
      setIsInputShown(false);
    } else {
      setIsInputEnabled(false);
    }
  }

  const onDeleteButtonClick = () => {
    onLinkDelete();
    setIsAddBtnShown(true);
    setIsInputEnabled(true);
    setIsInputShown(false);
  }

  const button = isInputEnabled ? <DoneButton fontSize='.8em' addCss={css`margin-right: .5rem`} onClick={onDoneButtonClick} /> : <EditButton fontSize='.8em' addCss={css`margin-right: .5rem`} hide onClick={onEditButtonClick} showOnHover />

  return (
    <div css={css`margin-bottom: .5rem;`} >
      <Button fontSize='1em' hide={!isAddLinkBtnShown} onClick={onAddLinkClick}>Add Link</Button>
      <div css={css`display: ${isInputShown ? 'block' : 'none'}`} >
        <FlexBox
          justifyContent='start'
          alignItems='center'
          behavior={showChildrenOnHover}
          addCss={css`height: 22px;`} >
          <DeleteButton
            fontSize='.8em'
            addCss={css`margin-right: .5rem`}
            hide
            showOnHover={!isInputEnabled}
            onClick={onDeleteButtonClick} />
          {button}
          <input
            css={css`
              font-size: 1.4rem;
              border: none;
              background-color: transparent;
              outline: none;
              &:disabled {
                color: unset;
              }
              &[type="month"] {
                font: unset;
                width: 12.5rem;
              }
            `}
            type='text'
            name='link'
            value={value}
            placeholder='Link'
            disabled={!isInputEnabled}
            onChange={onChange}
            ref={inputRef} />
        </FlexBox>
      </div>
    </div>
  )
}

export default AddLink;