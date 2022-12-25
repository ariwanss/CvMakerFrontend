/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { EditButton, DoneButton } from "../../buttons/TextButtons";
import FlexBox from "../../containers/FlexBox";
import TextArea from "../../inputs/TextArea";

const ItemTitle = ({ value, onChange: handleChange }) => {
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


  return (
    <FlexBox
      addCss={css`
        min-height: 22px;
        margin-bottom: .5rem;
      `}
      justifyContent='start'
      alignItems='center'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} >
      {button}
      <TextArea
        addCss={css`font-weight: bold;`}
        name='title'
        value={value}
        placeholder='Add Title'
        disabled={!isInputEnabled}
        onChange={handleChange}
      />
    </FlexBox>
  )
}

export default ItemTitle;