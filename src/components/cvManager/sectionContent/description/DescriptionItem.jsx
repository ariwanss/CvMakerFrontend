/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import FlexBox from "../../../containers/FlexBox";
import { DeleteButton, DoneButton, EditButton } from "../../../buttons/TextButtons";
import TextArea from "../../../inputs/TextArea";

const DescriptionItem = ({index, text, onEdit: handleEdit, onDelete: handleDelete}) => {
  const [isInputEnabled, setIsInputEnabled] = useState(false);
  const [isControlBtnShown, setIsControlBtnShown] = useState(false);
  
  const handleEditBtnClick = () => {
    setIsInputEnabled(true);
  }

  const handleDoneBtnClick = () => {
    if (!text) {
      handleDelete(index);
    } 
    setIsInputEnabled(false)
  }

  const handleDelBtnClick = () => {
    handleDelete(index);
  }

  const handleChange = (e) => {
    handleEdit(index, e.target.value);
  }

  const handleMouseEnter = () => {
    setIsControlBtnShown(true);
  }

  const handleMouseLeave = () => {
    setIsControlBtnShown(false);
  }

  const editButton = isInputEnabled ? <DoneButton addCss={css`margin-right: .5rem;`} fontSize='.8em' onClick={handleDoneBtnClick} /> : <EditButton addCss={css`margin-right: .5rem;`} fontSize='.8em' hide={!isControlBtnShown} onClick={handleEditBtnClick} />;

  return (
    <FlexBox 
      alignItems='center'
      justifyContent='start'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} >
      <DeleteButton 
        addCss={css`margin-right: .5rem;`} 
        fontSize='.8em' 
        hide={!isControlBtnShown || isInputEnabled} 
        onClick={handleDelBtnClick} />
      {editButton}
      <TextArea
        name='descEntry'
        value={text}
        disabled={!isInputEnabled}
        onChange={handleChange} />
    </FlexBox>
  )
}

export default DescriptionItem;