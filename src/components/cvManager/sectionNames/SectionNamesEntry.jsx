import { useDispatch } from 'react-redux';
import { shownSectionChanged } from '../../../stores/sectionSlice';
import PillButton from '../../buttons/PillButton';

const SectionNamesEntry = ({ title }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(shownSectionChanged(title))
  }

  return (
    <PillButton onClick={onClick}>{title}</PillButton>
  )
}

export default SectionNamesEntry;