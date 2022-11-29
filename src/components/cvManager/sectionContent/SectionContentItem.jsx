/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';
import RoundButton from '../../buttons/RoundButton';
import FlexBox from '../../containers/FlexBox';

const SectionContentItem = ({ title, yearStart, yearEnd, description, link }) => {
  const [isShown, setIsShown] = useState(false);

  const onClick = () => {
    setIsShown(!isShown);
  }

  const itemYear = yearStart === yearEnd ? yearEnd : yearStart + '-' + yearEnd;
  const itemDescription = description.map((entry, index) => <li css={css`line-height: 1.25; margin-top: .5rem; padding-left: .5rem; margin-left: .4rem`} key={index}>{entry}</li>);
  const buttonIcon = isShown ? <FaAngleUp /> : <FaAngleDown />;

  return (
    <li>
      <div css={css`background-color: #EEE;
  margin-bottom: .5em;
  padding: 1em;
  border-radius: .5em;
  text-align: left;
  font-size: 1.4em`}>
        <FlexBox justifyContent='space-between' alignItems='center'>
          <p css={css`font-weight: bold; width: 90%;`}>{title}</p>
          <RoundButton small onClick={onClick}>{buttonIcon}</RoundButton>
        </FlexBox>
        <div css={css`display: ${isShown ? 'block' : 'none'}`}>
          <p css={css`margin-top: .5rem`}>{itemYear}</p>
          <a target='_blank' href={link}><p css={css`margin-top: .5rem`}>{link}</p></a>
          <ul css={css`margin-top: 1rem; list-style-type: ${description.length === 1 ? 'none' : '\'-\''}`}>
            {itemDescription}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default SectionContentItem;