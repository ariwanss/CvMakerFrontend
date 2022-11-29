/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import RoundButton from "../../buttons/RoundButton";
import FlexBox from "../../containers/FlexBox";
import { FaPlus } from "react-icons/fa";

const AddSectionContentItem = ({ hide }) => {
  const [formData, setFormData] = useState({
    title: '',
    yearStart: '',
    yearEnd: '',
    description: [],
    link: ''
  });

  const [descEntry, setDescEntry] = useState('');

  const { title, timeStart, timeEnd, description, link } = formData;

  const onTextInputChange = (e) => {
    setFormData((prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    })));
  }

  const onDescEntryChange = (e) => {
    setDescEntry(e.target.value);
  }

  const onAddDescEntryClick = (e) => {
    e.preventDefault();
    setFormData(prevState => ({
      ...prevState,
      description: [...prevState.description, descEntry]
    }));
    setDescEntry('');
  }

  return (
    <form css={
      css`
      display: ${hide ? 'none' : 'flex'};
      flex-direction: column;
      `
    }>
      <input type="text" name="title" id="title" value={title} onChange={onTextInputChange} placeholder='title' />
      <input type="month" name="timeStart" id="timeStart" value={timeEnd} onChange={onTextInputChange} />
      <input type="month" name="timeEnd" id="timeEnd" value={timeEnd} onChange={onTextInputChange} />
      <input type="text" name="link" id="link" value={link} onChange={onTextInputChange} placeholder='link' />
      <FlexBox>
        <input type="text" name="descEntry" id="descEntry" value={descEntry} onChange={onDescEntryChange} placeholder='description' />
        <RoundButton small onClick={onAddDescEntryClick}><FaPlus /></RoundButton>
      </FlexBox>
    </form>
  )
}

export default AddSectionContentItem;