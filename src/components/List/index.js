/* eslint-disable global-require */
/* eslint-disable import/no-useless-path-segments */
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskStatus } from 'src/store/action';
import './list.scss';

function List() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="todo-list-container">
      {
        tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => dispatch(changeTaskStatus(task.id))}
            className={`${task.done === true ? 'todo-list-container--element task-done' : 'todo-list-container--element'}`}
          >
            <span className="todo-list-container--span">
              {
                task.done
                && <img src={require('./../../../images/icon-check.svg')} alt="bcheck icon svg" />
              }
            </span>
            <p>{task.content}</p>
          </li>
        ))
      }
      <li className="todo-list-container--element task-done">
        <span className="todo-list-container--span">
          <img src={require('./../../../images/icon-check.svg')} alt="bcheck icon svg" />
        </span>
        <p>jkl</p>
      </li>
    </ul>
  );
}

export default List;
