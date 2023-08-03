import React from 'react'
import DiaryItem from './DiaryItem'

const DiaryList = ({ diary, onDelete, onUpdate }) => {
  return (
    <div className='DiaryList'>
      <div className='listHeader'>
        <h2>일기 목록</h2>
        <h4><span>{diary.length}개</span>의 일기를 썼어요.</h4>
      </div>
      {diary.map((it) => (
        <DiaryItem {...it} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  )
}

export default DiaryList
