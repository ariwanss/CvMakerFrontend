/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FlexBox from "../../containers/FlexBox";
import ToggledInput from "../../inputs/ToggledInput";

const StartDateEndDate = ({ timeStart, timeEnd, onChange }) => {
  return (
    <FlexBox justifyContent='start' alignItems='center' >
      <div css={css`width: 20rem;`}>
        <p>Start date</p>
        <ToggledInput type='month' name='timeStart' id='timeStart' value={timeStart} onChange={onChange} addCss={css`margin-right: .5rem;`} disabled />
      </div>
      <div>
        <p>End date</p>
        <ToggledInput type='month' name='timeEnd' id='timeEnd' value={timeEnd} onChange={onChange} disabled />
      </div>
    </FlexBox>
  )
}

export default StartDateEndDate;