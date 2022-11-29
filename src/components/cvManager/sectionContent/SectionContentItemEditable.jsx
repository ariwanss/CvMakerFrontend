/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import FlexBox from "../../containers/FlexBox";
import RoundButton from "../../buttons/RoundButton";
import Button from "../../buttons/Button";

const boxStyle = css`background-color: #EEE;
  margin-bottom: .5em;
  padding: 1em;
  border-radius: .5em;
  text-align: left;
  font-size: 1.4em`

const showOnHover = css`&:hover .showOnHover {
  display: block;}`

const EditButton = (props) => {
  return (
    <Button {...props} fontSize='.8em' addCss={css`margin-left: 5px;`}>Edit</Button>
  )
}

const SectionContentItemEditable = () => {
  const [itemData, setItemData] = useState({
    title: 'Title',
    timeStart: 'Month, Year',
    timeEnd: 'Month, Year',
    link: 'Link',
    description: ['Description']
  });

  const { title, timeStart, timeEnd, link, description } = itemData;

  const listStyle = css`
  line-height: 1.25;
  margin-top: .5rem;
  ${description.length === 1 ? '' : 'padding-left: .5rem; margin-left: .4rem;'}
  `

  const itemDescription = description.map((entry, index) => (
    <li css={listStyle} key={index}>
      <FlexBox justifyContent='start' alignItems='center' addCss={'margin-top: 5px'}>
        <p>{entry}</p><EditButton />
      </FlexBox>
    </li>
  ));

  return (
    <div css={boxStyle}>
      <FlexBox justifyContent='start' alignItems='center' addCss={showOnHover}>
        <p css={css`font-weight: bold;`}>{title}</p>
        <EditButton hide/>
      </FlexBox>
      <div>
        <FlexBox justifyContent='start' alignItems='center' addCss={'margin-top: 5px'}>
          <p css={showOnHover}>{timeStart}</p><EditButton hide />
          <p>-</p>
          <p>{timeEnd}</p><EditButton />
        </FlexBox>
        <FlexBox justifyContent='start' alignItems='center' addCss={'margin-top: 5px'}>
          <a target='_blank'><p>{link}</p></a><EditButton />
        </FlexBox>
        <ul css={css`margin-top: .5rem; list-style-type: ${description.length === 1 ? 'none' : '\'-\''}`}>
          {itemDescription}
        </ul>
      </div>
    </div>
  )
}

export default SectionContentItemEditable;