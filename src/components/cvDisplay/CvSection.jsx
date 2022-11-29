//import './CvSection.css';
import { camelCaseToNormal } from '../../utility/textTransformFunctions';

export const CvSection = ({title, children}) => {
  return (
    <div className="section" id={title}>
      <div className="section-title">{camelCaseToNormal(title).toUpperCase()}</div>
      <ul className="items-list">{children}</ul>
    </div>
  )
}