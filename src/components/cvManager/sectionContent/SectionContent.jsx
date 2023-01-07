/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSectionContent, shownSectionChanged } from '../../../stores/sectionSlice';
import { FaTimes, FaRegTrashAlt, FaEdit, FaPlus } from 'react-icons/fa';
import { EditButton, DoneButton, DeleteButton } from '../../buttons/TextButtons';
import { useState, useEffect } from 'react';
import NewSectionContentItem from './NewSectionContentItem';
import PillButton from '../../buttons/PillButton';
import RoundButton from '../../buttons/RoundButton';
import FlexBox from '../../containers/FlexBox';

const SectionContent = ({ title }) => {
  const dispatch = useDispatch();
  const [isControlShown, setIsControlShown] = useState(false);
  const [isNewItemFormShown, setIsNewItemFormShown] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);

  useEffect(() => {
    if (currentTitle !== title) {
      setCurrentTitle(title);
      setIsControlShown(false);
    }
  })

  const handleCloseBtnClick = () => {
    dispatch(shownSectionChanged(''));
    setIsControlShown(false);
  }

  const handleTitleBtnClick = () => {
    setIsControlShown(!isControlShown);
  }

  const handleEditBtnClick = () => {

  }

  const handleDelBtnClick = () => {
    console.log('really')
  }

  const handleAddBtnClick = () => {
    setIsNewItemFormShown(true);
  }

  const sectionContent = useSelector((state) => selectSectionContent(state, title));

  if (!sectionContent) {
    return;
  }

  const sectionContentRender = sectionContent.map((entry, index) => <li key={index}>
    <NewSectionContentItem {...entry} />
  </li>)

  return (
    <FlexBox
      addCss={css`
        padding: .5rem;
      `}
      column
    >
      <FlexBox 
        addCss={css`margin-bottom: .5em`} 
        justifyContent='center' 
        alignItems='center'>
        <PillButton onClick={handleTitleBtnClick}>{title}</PillButton>
        <RoundButton small onClick={handleCloseBtnClick}><FaTimes /></RoundButton>
      </FlexBox>
      <FlexBox 
        addCss={css`margin-bottom: .5em`} 
        justifyContent='center' 
        alignItem='center' 
        hide={!isControlShown}>
        <RoundButton small onClick={handleEditBtnClick}><FaEdit /></RoundButton>
        <RoundButton small onClick={handleDelBtnClick}><FaRegTrashAlt /></RoundButton>
      </FlexBox>
      <ul>
        {sectionContentRender}
      </ul>
      <NewSectionContentItem hide={!isNewItemFormShown}/>
      <RoundButton small onClick={handleAddBtnClick} addCss={css`margin: auto`}><FaPlus /></RoundButton>
    </FlexBox>
  )
}

export default SectionContent;