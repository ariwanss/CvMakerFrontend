/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import FlexBox from "../../../containers/FlexBox";
import { DeleteButton, DoneButton, EditButton } from "../../../buttons/TextButtons";
import { showChildrenOnHover } from "../../../../utility/stylesAndBehaviors";

const DescriptionItem = ({index, text, onDescItemEdit, onDescItemDelete}) => {
  const [isInputEnabled, setIsInputEnabled] = useState(false);
  
  const onEditButtonClick = () => {
    setIsInputEnabled(true);
  }

  const onDoneButtonClick = () => {
    if (!text) {
      onDescItemDelete(index);
    } 
    setIsInputEnabled(false)
  }

  const onDeleteButtonClick = () => {
    onDescItemDelete(index);
  }

  const onChange = (e) => {
    onDescItemEdit(index, e.target.value);
  }

  const editButton = isInputEnabled ? <DoneButton addCss={css`margin-right: .5rem;`} fontSize='.8em' onClick={onDoneButtonClick} /> : <EditButton addCss={css`margin-right: .5rem;`} fontSize='.8em' hide onClick={onEditButtonClick} showOnHover />;

  return (
    <FlexBox align-items='center' behavior={showChildrenOnHover} >
      <DeleteButton addCss={css`margin-right: .5rem;`} fontSize='.8em' hide onClick={onDeleteButtonClick} showOnHover={!isInputEnabled} />
      {editButton}      
      <input
        css={css`
          font-size: 1em;
          border: none;
          background-color: transparent;
          outline: none;
          &:disabled {
            color: unset;
          }
        `}
        type='text'
        name='descEntry'
        value={text}
        disabled={!isInputEnabled}
        onChange={onChange} />
    </FlexBox>
  )
}

export default DescriptionItem;