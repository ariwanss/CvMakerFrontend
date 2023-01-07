/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextArea from "../../inputs/TextArea";
import InputWrapper from "../../inputs/InputWrapper";

const ItemTitle = ({ value, onChange: handleChange }) => {
   return (
    <InputWrapper
      addCss={css`
        min-height: 22px;
        margin-bottom: .5rem;
      `}
      justifyContent='center'
      alignItems='center'
    >
      <TextArea 
        addCss={css`font-weight: bold;`}
        name='title'
        value={value}
        placeholder='Add Title'
        onChange={handleChange} />
    </InputWrapper>
  )
}

export default ItemTitle;