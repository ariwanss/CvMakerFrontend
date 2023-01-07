/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FlexBox from "../../containers/FlexBox";
import Input from "../../inputs/Input";
import InputWrapper from "../../inputs/InputWrapper";
import NewInput from "../../inputs/NewInput";

const StartDateEndDate = ({ timeStart, timeEnd, onChange: handleChange }) => {
  return (
    <FlexBox
      addCss={css`
        margin-bottom: .5rem;
      `}
      justifyContent='start'
      alignItems='center' >
      <div>
        <p>Start date</p>
        <InputWrapper
          addCss={css`
            min-height: 22px;
          `}
        >
          <NewInput
            type='month'
            name='timeStart'
            value={timeStart}
            onChange={handleChange}
          />
        </InputWrapper>
      </div>
      <div>
        <p>End date</p>
        <InputWrapper
          addCss={css`
            min-height: 22px;
          `}
        >
          <NewInput 
            type='month'
            name='timeEnd'
            value={timeEnd}
            onChange={handleChange}
          />
        </InputWrapper>
      </div>
    </FlexBox>
  )
}

export default StartDateEndDate;