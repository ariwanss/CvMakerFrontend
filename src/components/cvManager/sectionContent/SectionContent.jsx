/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSectionContent, shownSectionChanged } from '../../../stores/sectionSlice';
import { FaTimes, FaRegTrashAlt, FaEdit, FaPlus } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import SectionContentItem from './SectionContentItem';
import AddSectionContentItem from './AddSectionContentItem';
import SectionContentItemEditable from './SectionContentItemEditable';
import PillButton from '../../buttons/PillButton';
import RoundButton from '../../buttons/RoundButton';
import FlexBox from '../../containers/FlexBox';

const SectionContent = ({ title }) => {
  const dispatch = useDispatch();
  const [isControlShown, setIsControlShown] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);

  useEffect(() => {
    if (currentTitle !== title) {
      setCurrentTitle(title);
      setIsControlShown(false);
    }
  })

  const onCloseButtonClick = () => {
    dispatch(shownSectionChanged(''));
    setIsControlShown(false);
  }

  const onTitleButtonClick = () => {
    setIsControlShown(!isControlShown);
  }

  const onEditButtonClick = () => {

  }

  const onDeleteButtonClick = () => {
    console.log('really')
  }

  const onAddButtonClick = () => {

  }

  const sectionContent = useSelector((state) => selectSectionContent(state, title));

  if (!sectionContent) {
    return;
  }

  const sectionContentRender = sectionContent.map((entry, index) => <SectionContentItem key={index} {...entry} />);

  return (
    <div css={css`padding: .5em`}>
      <FlexBox addCss={css`margin-bottom: .5em`} justifyContent='center' alignItems='center'>
        <PillButton onClick={onTitleButtonClick}>{title}</PillButton>
        <RoundButton small onClick={onCloseButtonClick}><FaTimes /></RoundButton>
      </FlexBox>
      <FlexBox addCss={css`margin-bottom: .5em`} justifyContent='center' alignItem='center' hide={!isControlShown}>
        <RoundButton small onClick={onEditButtonClick}><FaEdit /></RoundButton>
        <RoundButton small onClick={onDeleteButtonClick}><FaRegTrashAlt /></RoundButton>
      </FlexBox>
      <ul>
        {sectionContentRender}
      </ul>
      <AddSectionContentItem hide/>
      <SectionContentItemEditable />
      <RoundButton small onClick={onAddButtonClick} addCss={css`margin: auto`}><FaPlus /></RoundButton>
    </div>
  )
}

export default SectionContent;