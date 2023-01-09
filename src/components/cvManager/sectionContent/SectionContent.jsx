/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSectionContent, shownSectionChanged } from '../../../stores/cvItemsSlice';
import { FaTimes, FaRegTrashAlt, FaEdit, FaPlus } from 'react-icons/fa';
import { EditButton, DoneButton, DeleteButton } from '../../buttons/TextButtons';
import { useState, useEffect } from 'react';
import NewSectionContentItem from './NewSectionContentItem';
import PillButton from '../../buttons/PillButton';
import RoundButton from '../../buttons/RoundButton';
import FlexBox from '../../containers/FlexBox';
import NewInput from '../../inputs/NewInput';
import InputWrapper from '../../inputs/InputWrapper';

const SectionContent = ({ title }) => {
  const dispatch = useDispatch();
  const [isNewItemFormShown, setIsNewItemFormShown] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);

  useEffect(() => {
    if (currentTitle !== title) {
      setCurrentTitle(title);
    }
  });

  const handleCloseBtnClick = () => {
    dispatch(shownSectionChanged(''));
  }

  const handleAddBtnClick = () => {
    setIsNewItemFormShown(true);
  }

  const sectionContent = useSelector((state) => selectSectionContent(state, title));

  if (!title) {
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
        <PillButton addCss={css`&:hover {cursor: unset; filter: unset}`} >{title}</PillButton>
        <RoundButton small onClick={handleCloseBtnClick}><FaTimes /></RoundButton>
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