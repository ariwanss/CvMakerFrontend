/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import { DoneButton } from "../../../buttons/TextButtons";
import Button from "../../../buttons/Button";
import FlexBox from "../../../containers/FlexBox";
import TextArea from "../../../inputs/TextArea";

const AddDescription = ({ value, onChange: handleChange, hide, onDone: handleDone }) => {
  const [isAddBtnShown, setIsAddBtnShown] = useState(true);
  const [isInputShown, setIsInputShown] = useState(false);

  const handleAddBtnClick = () => {
    setIsAddBtnShown(false);
    setIsInputShown(true);
  };

  const handleDoneBtnClick = () => {
    setIsAddBtnShown(true);
    setIsInputShown(false);
    if (value) {
      handleDone();
    }
  }

  return (
    <div>
      <FlexBox
        justifyContent='center'
        alignItems='center'
        hide={!isInputShown} >
        <DoneButton fontSize='.8em' addCss={css`margin-right: .5rem;`} onClick={handleDoneBtnClick} />
        <TextArea
          name='newDesc'
          value={value}
          placeholder='Add description'
          onChange={handleChange} />
      </FlexBox>
      <Button fontSize='1em' onClick={handleAddBtnClick} hide={!isAddBtnShown} >Add Descripton</Button>
    </div>

  )
}

export default AddDescription;