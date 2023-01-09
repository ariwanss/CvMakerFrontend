import { useDispatch } from 'react-redux';
import { shownSectionChanged } from '../../../stores/cvItemsSlice';
import PillButton from '../../buttons/PillButton';

const SectionNamesEntry = ({ title }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(shownSectionChanged(title))
  }

  return (
    <PillButton onClick={handleClick}>{title}</PillButton>
  )
}

export default SectionNamesEntry;