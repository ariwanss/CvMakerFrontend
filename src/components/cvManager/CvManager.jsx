/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { SectionNames } from './sectionNames/SectionNames'
import  SectionContent  from './sectionContent/SectionContent';
import { selectShownSection } from '../../stores/sectionSlice';

const CvManager = () => {
  let shownSection = useSelector(selectShownSection);
  return (
    <div css={css`
    background-color: #CCC;
    height: 100vh;
    width: 50vw;`}>
      <SectionNames />
      <SectionContent title={shownSection} />
    </div>
  )
}

export default CvManager;