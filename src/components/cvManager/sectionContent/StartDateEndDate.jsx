/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FlexBox from "../../containers/FlexBox";
import Input from "../../inputs/Input";

const StartDateEndDate = ({ timeStart, timeEnd, onChange }) => {
  return (
    <FlexBox 
      addCss={css`
        margin-bottom: .5rem;
      `}
      justifyContent='start' 
      alignItems='center' >
      <div css={css`width: 20rem;`}>
        <p>Start date</p>
        <Input type='month' name='timeStart' id='timeStart' value={timeStart} onChange={onChange} addCss={css`margin-right: .5rem;`} disabled />
      </div>
      <div>
        <p>End date</p>
        <Input type='month' name='timeEnd' id='timeEnd' value={timeEnd} onChange={onChange} disabled />
      </div>
    </FlexBox>
  )
}

export default StartDateEndDate;