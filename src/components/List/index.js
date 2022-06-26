/* eslint-disable global-require */
/* eslint-disable import/no-useless-path-segments */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect  } from 'react';
import { changeTaskStatus, filterActiveTasks, filterCompletedTasks, filterAllTasks, clearCompletedTasks } from 'src/store/action';
import './list.scss';

function List() {
  const tasks = useSelector((state) => state.tasks);
  const filteredTasks = useSelector((state) => state.filteredTasks);
  const dispatch = useDispatch();

  let sortedTasks = [...filteredTasks];
  sortedTasks.sort((a, b) => a.done - b.done);

  useEffect(() => {
    dispatch(filterAllTasks());
  },[]);

  const tasksLeft = tasks.filter((task) => task.done=== false).length;
  
  return (
    <div className="todo-list-container">
      <ul className="todo-list-container--tasks">
        {
          sortedTasks.map((task) => (
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
      </ul>
      <div className="todo-list-container--footer">
        <p>{tasksLeft} tasks left</p>
        <div className="todo-list-container--footer-btns">
          <p onClick={() => dispatch(filterActiveTasks())}> Active</p>
          <p onClick={() => dispatch(filterCompletedTasks())}>Completed</p>
          <p onClick={() => dispatch(filterAllTasks())}>All</p>
        </div>
        <p onClick={() => dispatch(clearCompletedTasks())}>Clear completed</p>
      </div>
    </div>
  );
}

export default List;
