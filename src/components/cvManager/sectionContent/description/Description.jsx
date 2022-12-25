/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DescriptionItem from './DescriptionItem'

const Description = ({ description, onDescItemEdit: handleDescItemEdit, onDescItemDelete: handleDescItemDelete }) => {
  const listStyle = css`
  line-height: 1.25;
  // margin-bottom: .5rem;
  min-height: 22px;
  ${description.length === 1 ? '' : 'padding-left: .5rem; margin-left: .4rem;'}
  `

  const descriptionItems = description.map((entry, index) => (
    <li key={index} css={listStyle} >
      <DescriptionItem 
        index={index} 
        text={entry} 
        onEdit={handleDescItemEdit} 
        onDelete={handleDescItemDelete} />
    </li>
  ))

  return (
    <ul css={css`list-style-type: ${description.length === 1 ? 'none' : '\"-\"'}; margin-bottom: .5rem;`}>
      {descriptionItems}
    </ul>
  )
}

export default Description