/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Button from "../../buttons/Button";
import { DoneButton, EditButton, DeleteButton } from "../../buttons/TextButtons";
import FlexBox from "../../containers/FlexBox";
import TextArea from "../../inputs/TextArea";
import InputWrapper from "../../inputs/InputWrapper";

const AddLink = ({ value, onChange: handleChange, onDelete: handleDelete }) => {
  const [isAddLinkBtnShown, setIsAddBtnShown] = useState(value ? false : true);
  const [isInputShown, setIsInputShown] = useState(value ? true : false);
  const [isInputEnabled, setIsInputEnabled] = useState(false);
  const [isButtonShown, setIsButtonShown] = useState(false);

  const handleAddLinkClick = () => {
    setIsInputShown(true);
    setIsInputEnabled(true);
    setIsAddBtnShown(false);
  }

  const handleEditBtnClick = () => {
    setIsInputEnabled(true);
    setIsButtonShown(false);
  }

  const handleDoneBtnClick = () => {
    if (!value) {
      setIsAddBtnShown(true);
      setIsInputEnabled(true);
      setIsInputShown(false);
    } else {
      setIsInputEnabled(false);
    }
  }

  const handleDelBtnClick = () => {
    handleDelete();
    setIsAddBtnShown(true);
    setIsInputEnabled(true);
    setIsInputShown(false);
  }

  const handleMouseEnter = () => {
    setIsButtonShown(true);
  }

  const handleMouseLeave = () => {
    setIsButtonShown(false);
  }

  const button = isInputEnabled ? <DoneButton fontSize='.8em' addCss={css`margin-right: .5rem`} onClick={handleDoneBtnClick} /> : <EditButton fontSize='.8em' addCss={css`margin-right: .5rem`} hide={!isButtonShown} onClick={handleEditBtnClick} />

  return (
    <div 
      css={css`margin-bottom: .5rem;`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      <Button
        fontSize='1em'
        hide={!isAddLinkBtnShown}
        onClick={handleAddLinkClick} >Add Link
      </Button>
      <FlexBox
        addCss={css`
            min-height: 22px;
            margin-bottom: .5rem;
          `}
        justifyContent='start'
        alignItems='center'
        hide={!isInputShown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >
        <DeleteButton
          fontSize='.8em'
          addCss={css`margin-right: .5rem`}
          hide={!isButtonShown || isInputEnabled}
          onClick={handleDelBtnClick} />
        {button}
        <TextArea
          name='link'
          value={value}
          placeholder='Add link'
          disabled={!isInputEnabled}
          onChange={handleChange} />
      </FlexBox>
      {/* <DeleteButton
        fontSize='.8em'
        addCss={css`margin-right: .5rem`}
        hide={!isButtonShown || isInputEnabled}
        onClick={handleDelBtnClick} />
      <InputWrapper
        addCss={css`
          min-height: 22px;
          margin-bottom: .5rem;
        `}
        justifyContent='center'
        alignItems='center'
        hide={!isInputShown}
      >
        <TextArea
          name='link'
          value={value}
          placeholder='Add link'
          onChange={handleChange} />
      </InputWrapper> */}
    </div>
  )
}

export default AddLink;