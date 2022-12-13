import { useState } from "react";

const Todo = ({ item, deleteItem }) => {
  // console.log(item); // {id: 1, title: 'todo1', done: false, }
  // const { id, title, done } = item;
  const [todoItem, setTodoItem] = useState(item);

  const OnClickDelete = () => {
    deleteItem(todoItem);
  };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${item.id}`}
        name={`todo${item.id}`}
        value={`todo${item.id}`}
        defaultChecked={item.done}
      />
      <label htmlFor={`todo${item.id}`}>{item.title}</label>
      <button onClick={OnClickDelete}>DELETE</button>
    </div>
  );
};

export default Todo;
