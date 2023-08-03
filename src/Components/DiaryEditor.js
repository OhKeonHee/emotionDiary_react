import React from 'react'
import { useState, useRef } from 'react';

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: '😄'
  });
  const handleSetState = (e) => {
    setState({
      ...state, [e.target.name] : e.target.value
    })
  }
  const handleSubmit = (e) => {
    if(state.author.length < 1) {
      alert('이름을 작성해주세요.');
      authorInput.current.focus();
      return;
    }
    if(state.content.length < 5) {
      alert('최소 5자는 적어주세요.');
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
  }
  return (
    <div className='DiaryEditor'>
      <div className='nameInput'>
        <label>이름 </label><input ref={authorInput} type='text' name='author' value={state.author} onChange={handleSetState}/>
        <div>
          <span>오늘의 감정점수 </span>
          <select name='emotion' value={state.emotion} onChange={handleSetState}>
            <option value={'😄'}>😄</option>
            <option value={'😃'}>😃</option>
            <option value={'🙂'}>🙂</option>
            <option value={'😥'}>😥</option>
            <option value={'😭'}>😭</option>
            <option value={'😡'}>😡</option>
            <option value={'🤢'}>🤢</option>
            <option value={'😷'}>😷</option>
          </select>
        </div>
      </div>
      <div>
        <textarea ref={contentInput} value={state.content} name='content' placeholder='일기' type='text' onChange={handleSetState}/>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  )
}

export default DiaryEditor
