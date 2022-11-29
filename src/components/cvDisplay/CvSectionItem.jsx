//import './CvSectionItem.css';
import classnames from 'classnames';

export const CvSectionItem = ({title, link, yearStart, yearEnd, description}) => {
  let itemYear = yearStart === yearEnd ? <span>{yearEnd}</span> : <span><span>{yearStart}</span> - <span>{yearEnd}</span></span>;
  let listClassName = description.length === 1 ? 'no-style-list' : 'dash-list';
  let descriptionList = description.map((entry, index) => <li key={index}>{entry}</li>);

  return (
    <li className='item'>
      <div className="item-header">
        <div className="item-title">{title}</div>
        
        <div className="item-year">
          {itemYear}
        </div>
      </div>
      <div className="item-link">{link}</div>
      <ul className={classnames('item-description', listClassName)}>{descriptionList}</ul>
    </li>
  )
}