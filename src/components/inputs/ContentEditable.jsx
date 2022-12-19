/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useEffect } from "react";

const ContentEditable = ({ name, value, onChange: handleChange, disabled, addCss, placeholder }) => {
  const el = useRef();
  const text = useRef(value);
  const latestRange = useRef();
  const startOffset = useRef(0);
  const endOffset = useRef(0);

  useEffect(() => {
    if (disabled) {
      return;
    }
    if (!latestRange.current) {
      const range = document.createRange();
      if (value || placeholder) {
        range.selectNodeContents(el.current.firstChild);
      } else {
        range.setStart(el.current.firstChild, 0);
        range.setEnd(el.current.firstChild, 0); 
      }
      latestRange.current = range;
    }
    const sel = getSelection();
    latestRange.current.setStart(el.current.firstChild || el.current, startOffset.current)
    latestRange.current.setEnd(el.current.firstChild || el.current, endOffset.current)
    sel.removeAllRanges();
    sel.addRange(latestRange.current);
    el.current.focus();
  })

  const saveLatestRange = () => {
    startOffset.current = getSelection().getRangeAt(0).startOffset;
    endOffset.current = getSelection().getRangeAt(0).endOffset;
    latestRange.current = getSelection().getRangeAt(0).cloneRange();
  }

  useEffect(() => {
    text.current = value;
  }, [value])

  const handleInput = (e) => {
    text.current = e.target.innerText;
  }

  const handleBlur = (e) => {
    latestRange.current.collapse(false);
    saveLatestRange();
    e.target.name = name;
    e.target.value = text.current;
    handleChange(e);
  }

  return (
    <div
      css={css`
        font-size: 1.4rem;
        border: none;
        background-color: white;
        outline: none;
        width: 100%;
        word-break: break-word;
        ${addCss};
      `}
      contentEditable={!disabled}
      onInput={handleInput}
      ref={el}
      onBlur={handleBlur}
      onKeyUp={saveLatestRange}
      onMouseUp={saveLatestRange}
    //suppressContentEditableWarning
      dangerouslySetInnerHTML={{__html: text.current || placeholder}}
      placeholder={placeholder}
    >
      
    </div>
  )
}

export default ContentEditable;