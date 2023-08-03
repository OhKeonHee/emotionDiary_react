import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './Components/DiaryEditor';
import DiaryList from './Components/DiaryList';
import Header from './Components/Header';

function App() {
  const [diary, setDiary] = useState([]);
  const [state, setState] = useState({
    id: 1,
    name: '🌞', 
  });
  const handleChangeWeather = (id, name) => {
    setState({
      ...state,
      id,
      name,
    })
  }
  const dataId = useRef(1);
  const onCreate = (author, content, emotion, weather) => {
    const writeDate = new Date().getTime();
    const newDiary = {
      author,
      content,
      emotion,
      writeDate,
      id: dataId.current,
      weather: state.name
    }
    dataId.current += 1;
    setDiary([newDiary, ...diary])
  }
  const onDelete = (targetId) => {
    const newDiary = diary.filter((it) => (it.id !== targetId))
    setDiary(newDiary)
  }
  const onUpdate = (targetId, newContent) => {
    setDiary(diary.map((it) => (it.id === targetId ? {...it, content: newContent} : it)))
  }
  return (
    <>
      <div className="App">
        <Header state={state} handleChangeWeather={handleChangeWeather}/>
        <DiaryEditor onCreate={onCreate} />
        <DiaryList diary={diary} onDelete={onDelete} onUpdate={onUpdate} />
      </div>
    </>
  );
}

export default App;
