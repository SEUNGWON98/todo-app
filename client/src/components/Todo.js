import { useState } from "react";

const Todo = ({ item, deleteItem }) => {
  // console.log(item); // {id: 1, title: 'todo1', done: false, }
  const { id, title, done } = item;
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const OnInputClick = () => {
    setReadOnly(false);
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
  };

  // const checkbox = () => {
  //   if (readOnly == true) {
  //     setReadOnly(false);
  //   } else {
  //     setReadOnly(true);
  //   }
  // };

  // done: true -> false, fasle, -> true
  const checkbox = (e) => {
    // rest: id, title 정보
    const { done, ...rest } = todoItem; // { id: 1, title: 'todo1', done: false, }
    setTodoItem({
      done: e.target.checked,
      ...rest,
    });
  };

  const OnClickDelete = () => {
    deleteItem(todoItem);
  };

  // title input 커서가 깜빡인다고 수정이 가능한 것은 아님
  // 사용자가 키보드 입력할 때마다 todoItem의 title을 새 값으로 변경
  const editEventHandler = (e) => {
    //rest: id, done 정보
    const { title, ...rest } = todoItem;

    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  return (
    <div className="Todo">
      <div className="TodoLists">
        <input
          type="checkbox"
          id={`todo${item.id}`}
          name={`todo${item.id}`}
          value={`todo${item.id}`}
          defaultChecked={item.done}
          onClick={checkbox}
        />
        {/* <label htmlFor={`todo${id}`}>{title}</label> */}

        <input
          className="MyTodo"
          name="Todo"
          type="text"
          value={todoItem.title} //title로 하면 상태로 변경이 안된다
          onChange={editEventHandler}
          readOnly={readOnly}
          onClick={OnInputClick}
          onKeyPress={enterKeyEventHandler}
        />
      </div>

      <button onClick={OnClickDelete} className="removeTodo">
        🗑️
      </button>
    </div>
  );
};

export default Todo;
