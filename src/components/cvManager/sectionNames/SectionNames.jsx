/** @jsxImportSource @emotion/react */
import { useSelector } from 'react-redux';
import { selectSectionTitles } from '../../../stores/sectionSlice';
import SectionNamesEntry from './SectionNamesEntry';
import AddSection from './AddSection';
import FlexBox from '../../containers/FlexBox';

export const SectionNames = () => {
  const sectionEntries = useSelector(selectSectionTitles);
  const sectionEntriesRender = sectionEntries.map((entry, index) => <SectionNamesEntry key={index} title={entry} />)

  return (
    <FlexBox justifyContent='center' alignItems='center' row wrap>
      {sectionEntriesRender}
      <AddSection />
    </FlexBox>
  )
}