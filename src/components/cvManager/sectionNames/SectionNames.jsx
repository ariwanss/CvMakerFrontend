/** @jsxImportSource @emotion/react */
import { useSelector } from 'react-redux';
import { selectSections } from '../../../stores/cvSectionsSlice';
import SectionNamesEntry from './SectionNamesEntry';
import AddSection from './AddSection';
import FlexBox from '../../containers/FlexBox';

export const SectionNames = () => {
  const sectionEntries = useSelector(selectSections);
  const sectionEntriesRender = sectionEntries.map((entry, index) => <SectionNamesEntry key={index} title={entry} />)

  return (
    <FlexBox justifyContent='center' alignItems='center' row wrap>
      {sectionEntriesRender}
      <AddSection />
    </FlexBox>
  )
}