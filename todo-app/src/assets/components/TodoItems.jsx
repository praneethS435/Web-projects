import { Todo } from "./Todo";

export const TodoItems = ({ Todoslots }) => {
  return (
    <div className="list-container">
      {Todoslots.map((item) => (
        <Todo task={item.Name} taskDate={item.Duedate} />
      ))}
    </div>
  );
};
