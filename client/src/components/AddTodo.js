// 1. 함수형 컴포넌트
// 2. input과 button을 가짐

import { useState } from "react";

const AddTodo = ({ addItem }) => {
  // const { addItem } = props; //이걸 쓰려면 함수에 addItem이 아니라 props로 받아야 한다.
  // 사용자 입력을 저장할 객체
  // (id, title, done에 대한 정보를 저장해야해서 객체 형태로!!)
  const [todoItem, setTodoItem] = useState({
    title: "초기값",
  });

  const onButtononclick = () => {
    // props로 받아온 addItem 함수 실행
    addItem(todoItem); //{title: 'input입력값'}
    setTodoItem({ title: "" }); //input 초기화
  };

  const onKeyPress1 = (e) => {
    if (e.key == "Enter") {
      onButtononclick();
    }
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add your new Todo"
        value={todoItem.title}
        onKeyPress={onKeyPress1}
        onChange={(e) => setTodoItem({ title: e.target.value })}
      />
      <button onClick={onButtononclick}>ADD</button>
    </div>
  );
};

export default AddTodo;
