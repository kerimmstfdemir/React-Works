import { useDispatch, useSelector } from "react-redux";
import { cleartodo } from "../../redux/actions/todoAction";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch()
  const { todoList } = useSelector((state) => state.todo)
  const handleClearList = () => {
    dispatch(cleartodo());
  };

  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
