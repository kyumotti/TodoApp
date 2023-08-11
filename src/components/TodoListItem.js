import React from 'react'
import {MdRemoveCircleOutline,MdCheckBoxOutlineBlank,MdCheckBox} from "react-icons/md";
import classNames from 'classnames';
import "../styles/TodoListItem.scss"

function TodoListItem({todo, onToggle, onRemove}) {
  const {id,text,checked} = todo; //구조 분해 할당

  return (
    <div className='TodoListItem'>
      <div className={classNames("checkbox",{checked:checked})} onClick={()=> {onToggle(id)}}>
        {/* 삼항연산자: checked가 true면 체크박스 아이콘이 보이고 아니면 빈체크박스가 보이게 */}
        {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
        
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={()=> {onRemove(id)}}><MdRemoveCircleOutline/></div>
    </div>
  )
}

export default TodoListItem