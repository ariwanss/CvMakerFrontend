/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { sectionAdded } from '../../../stores/sectionSlice';
import RoundButton from '../../buttons/RoundButton';
import FlexBox from '../../containers/FlexBox';

const AddSection = () => {
  const dispatch = useDispatch();
  const [addSectionState, setAddSectionState] = useState({
    isInputShown: false,
    title: ''
  });
  const {isInputShown, title} = addSectionState;

  const inputStyle = css`
  border: none;
  padding: 12px;
  width: 50%;
  border-radius: 8px;
  font-size: 1.6em;
  font-weight: normal;
  margin: 2px;
  outline: none;
  display: ${isInputShown ? 'inline-block' : 'none'};
  `;

  const handleAddBtnClick = () => {
    if (isInputShown && title !== '') {
      console.log('dispatch')
      dispatch(sectionAdded(title));
      setAddSectionState((prevState) => ({
        ...prevState,
        isInputShown: false,
        title: ''
      }))
    } else {
      setAddSectionState((prevState) => ({
        ...prevState,
        isInputShown: true
      }))
    }
  }

  const handleCloseBtnClick = () => {
    setAddSectionState((prevState => ({
      ...prevState,
      isInputShown: false
    })))
  }

  const handleChange = (e) => {
    setAddSectionState((prevState) => ({
      ...prevState,
      title: e.target.value
    }))
  }

  return (
    <FlexBox justifyContent='center' alignItems='center' row inline>
      <input type="text" name="sectionTitle" id="" css={inputStyle} onChange={handleChange} value={title} />
      <RoundButton small hide={false} onClick={handleAddBtnClick}><FaPlus /></RoundButton>
      <RoundButton small hide={!isInputShown} onClick={handleCloseBtnClick}><FaTimes /></RoundButton>
    </FlexBox>
  )
}

export default AddSection;