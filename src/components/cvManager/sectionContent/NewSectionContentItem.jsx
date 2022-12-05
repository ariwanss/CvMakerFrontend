/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import Button from "../../buttons/Button";
import ToggledInput from "../../inputs/ToggledInput";
import StartDateEndDate from "./StartDateEndDate";
import AddLink from "./AddLink";
import AddDescription from "./description/AddDescription";
import Description from "./description/Description";

const boxStyle = css`
  background-color: #ddd;
  margin-bottom: .5em;
  padding: 1em;
  border-radius: .5em;
  text-align: left;
  font-size: 1.4em;`

const NewSectionContentItem = ({title: entryTitle, timeStart: entryTimeStart, timeEnd: entryTimeEnd, link: entryLink, description: entryDescription}) => {
  const [itemData, setItemData] = useState({
    title: entryTitle,
    timeStart: entryTimeStart,
    timeEnd: entryTimeEnd,
    link: entryLink,
    description: entryDescription || []
  });

  const { title, timeStart, timeEnd, link, description } = itemData;

  const [newDesc, setNewDesc] = useState('');

  const [isUnsaved, setIsUnsaved] = useState(true);

  useEffect(() => {
    setIsUnsaved(true);
  }, [itemData]);

  const onInputChange = (e) => {
    setItemData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const onNewDescChange = (e) => {
    setNewDesc(e.target.value);
  }

  const onNewDescDone = () => {
    setItemData(prev => ({
      ...prev,
      description: [...prev.description, newDesc]
    }));
    setNewDesc('');
  }

  const onDescItemEdit = (index, text) => {
    setItemData(prev => ({
      ...prev,
      description: [...prev.description.slice(0, index), text, ...prev.description.slice(index + 1)]
    }))
  }

  const onDescItemDelete = (index) => {
    setItemData(prev => ({
      ...prev,
      description: [...prev.description.slice(0, index), ...prev.description.slice(index + 1)]
    }))
  }

  const onLinkDelete = () => {
    setItemData(prev => ({
      ...prev,
      link: ''
    }))
  }

  const onSave = () => {
    setIsUnsaved(false);
  }

  return (
    <div css={boxStyle}>
      <p css={css`margin-bottom: 1rem; text-align: center;
      display: ${isUnsaved ? 'block' : 'none'};`} >Unsaved</p>
      <ToggledInput type='text' name='title' value={title} onChange={onInputChange} addCss={css`font-weight: bold;`} disabled placeholder='Add title' />
      <div>
        <StartDateEndDate {...{timeStart, timeEnd}} onChange={onInputChange} />
        <AddLink
          value={link}
          onChange={onInputChange}
          onLinkDelete={onLinkDelete} />
        <Description
          description={description}
          onDescItemEdit={onDescItemEdit}
          onDescItemDelete={onDescItemDelete} />
        <AddDescription
          newDesc={newDesc}
          onChange={onNewDescChange}
          onDone={onNewDescDone} />
      </div>
      <Button addCss={css`margin: auto; margin-top: 1rem;`} fontSize='1em' hide={!isUnsaved} onClick={onSave} >Save</Button>
    </div>
  )
}

export default NewSectionContentItem;