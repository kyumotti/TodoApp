
import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const[todos,setTodos] = useState([

    {id:1,
    text:"운동하기",
    checked:true,
    }, {id:2, 
    text:"요리하기",
    checked:true},
    {
      id:3, 
    text:"학원가기",
    checked:false,
    }
  ]);

  const nextId = useRef(4); 
  console.log(nextId);
  //새로운 input에 관한 새 객체생성 함수 --> 이후 todoinsert 컴포넌트에 내보내기
  const onInsert = useCallback((value)=> {
    const todo = {
      id: nextId.current,
      text: value,
      checked: false,
    }; 
    setTodos(todos.concat(todo)); 
    nextId.current += 1;
  },[todos])

  const onToggle = useCallback((id) => {
    // ...todo : spread 연산자 -> 객체 앞에 ...을 붙이면 객체가 가진 모든 속성을 불러온다. 그중 checked속성만 변경
    setTodos(todos.map(todo => todo.id === id? {...todo, checked: !todo.checked }:todo))
  },[todos])

  const onRemove = useCallback((id) => {
    setTodos(todos.filter(todo => todo.id!==id))
  },[todos])

  return (
    <TodoTemplate>
      <TodoInsert onInsert = {onInsert}/>
      <TodoList todos={todos} onToggle = {onToggle} onRemove={onRemove}/> 
    </TodoTemplate>
  );
}

export default App;
