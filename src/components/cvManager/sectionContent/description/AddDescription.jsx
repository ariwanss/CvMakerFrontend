/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import { DoneButton } from "../../../buttons/TextButtons";
import Button from "../../../buttons/Button";
import FlexBox from "../../../containers/FlexBox";

const AddDescription = ({ newDesc, onChange, hide, onDone}) => {
  const [isAddDescBtnShown, setIsAddDescBtnShown] = useState(true);
  const [isInputShown, setIsInputShown] = useState(false);

  const newDescRef = useRef();

  useEffect(() => {
    newDescRef.current.focus();
  })

  const onAddDescButtonClick = () => {
    setIsAddDescBtnShown(false);
    setIsInputShown(true);
  };

  const onDoneButtonClick = () => {
    setIsAddDescBtnShown(true);
    setIsInputShown(false);
    if (newDesc) {
      onDone();
    }
  }

  return (
    <div>
      <div css={css`display: ${isInputShown ? 'block' : 'none'}`} >
        <FlexBox>
          <DoneButton fontSize='.8em' addCss={css`margin-right: .5rem;`} onClick={onDoneButtonClick} />
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
            name='newDesc'
            value={newDesc}
            onChange={onChange}
            placeholder='Description'
            ref={newDescRef} />
        </FlexBox>
      </div>
      <Button fontSize='1em' onClick={onAddDescButtonClick} hide={!isAddDescBtnShown} >Add Descripton</Button>
    </div>

  )
}

export default AddDescription;