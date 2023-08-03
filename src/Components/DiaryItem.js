import React, { useRef, useState } from 'react'

const DiaryItem = ({ id, content, emotion, author, writeDate, onDelete, onUpdate, weather }) => {
  const updateInput = useRef();
  const [localContent, setLocalContent] = useState(content);
  const [isUpdate, setIsUpdate] = useState(false);
  const toggleIsUpdate = () => setIsUpdate(!isUpdate);

  const handleDelete = () => {
    if(window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
      onDelete(id)
    }
  }
  const cancelUpdate = () => {
    setIsUpdate(false)
    setLocalContent(content)
  }
  const confirmUpdate = () => {
    if(updateInput.length < 5) {
      alert('5자 이상 작성해주세요.');
      updateInput.current.focus();
      return;
    }
    if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onUpdate(id, localContent)
      toggleIsUpdate();
    }
  }

  return (
    <div className='DiaryItem'>
      <div style={{display: 'flex'}}>
        <p className='itemInfo'><span>{id}번째</span> 일기</p>
        <div style={{fontSize: '30px', marginLeft: '10px', transform: 'translateY(-10px)'}}>{weather}</div>
      </div>
      <div className='itemName'>
        <span>{author}</span>
        <span>{emotion}</span>
      </div>
      <div className='itemTime'>
        <p>{new Date(writeDate).toLocaleString()}</p>
      </div>
      <div className='itemContent'>
        {isUpdate ? 
          <textarea 
            ref={updateInput} 
            value={localContent} 
            onChange={(e) => {setLocalContent(e.target.value)}}
            style={{resize: 'none', width: '500px', height: '100px', fontSize: '20px', padding:'10px 20px'}}
          /> : content}
      </div>
      <div className='itemBtn'>
        {isUpdate ? 
            <>
              <button onClick={cancelUpdate}>수정취소</button>
              <button onClick={confirmUpdate}>수정완료</button>
            </> : 
            <>
              <button onClick={handleDelete}>삭제하기</button>
              <button onClick={toggleIsUpdate} isUpdate={isUpdate} >수정하기</button>
            </>
        }
      </div>
    </div>
  )
}

export default DiaryItem
