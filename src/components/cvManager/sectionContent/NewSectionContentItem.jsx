/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import FlexBox from "../../containers/FlexBox";
import Button from "../../buttons/Button";
import ItemTitle from "./ItemTitle";
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

const NewSectionContentItem = ({ title: entryTitle, timeStart: entryTimeStart, timeEnd: entryTimeEnd, link: entryLink, description: entryDescription, hide }) => {
  const [itemData, setItemData] = useState({
    title: entryTitle,
    timeStart: entryTimeStart,
    timeEnd: entryTimeEnd,
    link: entryLink,
    description: entryDescription || []
  });

  const { title, timeStart, timeEnd, link, description } = itemData;

  const [newDesc, setNewDesc] = useState('');

  const [isUnsaved, setIsUnsaved] = useState(false);

  const handleChange = (e) => {
    setItemData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleNewDescChange = (e) => {
    setNewDesc(e.target.value);
    setIsUnsaved(true);
  }

  const handleNewDescDone = () => {
    setItemData(prev => ({
      ...prev,
      description: [...prev.description, newDesc]
    }));
    setNewDesc('');
    setIsUnsaved(true);
  }

  const handleDescItemEdit = (index, text) => {
    setItemData(prev => ({
      ...prev,
      description: [...prev.description.slice(0, index), text, ...prev.description.slice(index + 1)]
    }));
    setIsUnsaved(true);
  }

  const handleDescItemDelete = (index) => {
    setItemData(prev => ({
      ...prev,
      description: [...prev.description.slice(0, index), ...prev.description.slice(index + 1)]
    }));
    setIsUnsaved(true);
  }

  const handleLinkDelete = () => {
    setItemData(prev => ({
      ...prev,
      link: ''
    }));
    setIsUnsaved(true);
  }

  const onSave = () => {
    setIsUnsaved(false);
  }

  return (
    <FlexBox
      addCss={css`
        ${boxStyle};
      `}
      column
      hide={hide}
      >
      <p css={css`margin-bottom: 1rem; text-align: center;
      display: ${isUnsaved ? 'block' : 'none'};`} >Unsaved</p>
      <ItemTitle
        value={title}
        onChange={handleChange} />
      <div>
        <StartDateEndDate {...{ timeStart, timeEnd }} onChange={handleChange} />
        <AddLink
          value={link}
          onChange={handleChange}
          onDelete={handleLinkDelete} />
        <Description
          description={description}
          onDescItemEdit={handleDescItemEdit}
          onDescItemDelete={handleDescItemDelete} />
        <AddDescription
          value={newDesc}
          onChange={handleNewDescChange}
          onDone={handleNewDescDone} />
      </div>
      <Button addCss={css`margin: auto; margin-top: 1rem;`} fontSize='1em' hide={!isUnsaved} onClick={onSave} >Save</Button>
    </FlexBox>


  )
}

export default NewSectionContentItem;