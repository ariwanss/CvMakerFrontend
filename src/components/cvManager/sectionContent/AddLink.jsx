/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { showChildrenOnHover } from "../../../utility/stylesAndBehaviors";
import Button from "../../buttons/Button";
import { DoneButton, EditButton, DeleteButton } from "../../buttons/TextButtons";
import FlexBox from "../../containers/FlexBox";
import ContentEditable from "../../inputs/ContentEditable";

const AddLink = ({ value, onChange: handleChange, onDelete: handleDelete }) => {
  const [isAddLinkBtnShown, setIsAddBtnShown] = useState(value ? false : true);
  const [isInputShown, setIsInputShown] = useState(value ? true : false);
  const [isInputEnabled, setIsInputEnabled] = useState(false);

  const handleAddLinkClick = () => {
    setIsInputShown(true);
    setIsInputEnabled(true);
    setIsAddBtnShown(false);
  }

  const handleEditBtnClick = () => {
    setIsInputEnabled(true);
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

  const button = isInputEnabled ? <DoneButton fontSize='.8em' addCss={css`margin-right: .5rem`} onClick={handleDoneBtnClick} /> : <EditButton fontSize='.8em' addCss={css`margin-right: .5rem`} hide onClick={handleEditBtnClick} showOnHover />

  return (
    <div css={css`margin-bottom: .5rem;`} >
      <Button fontSize='1em' hide={!isAddLinkBtnShown} onClick={handleAddLinkClick}>Add Link</Button>
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
            onClick={handleDelBtnClick} />
          {button}
          <ContentEditable
            name='link'
            value={value}
            onChange={handleChange}
            disabled={!isInputEnabled} />
        </FlexBox>
      </div>
    </div>
  )
}

export default AddLink;