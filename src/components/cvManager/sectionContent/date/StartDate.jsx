/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import NewInput from "../../../inputs/NewInput";
import InputWrapper from "../../../inputs/InputWrapper";

const StartDate = ({ value, onChange: handleChange }) => {

  return (
    <div>
      <h3>
        Start Date
      </h3>
      <InputWrapper>
        <NewInput
          type='month'
          name='timeStart'
          value={value}
          onChange={handleChange}
        />
      </InputWrapper>

    </div>
  )
}