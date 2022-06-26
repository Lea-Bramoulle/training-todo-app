/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';

import { CHANGE_TASK_STATUS, CHANGE_INPUT_VALUE, CREATE_NEW_TASK, FILTER_ACTIVE_TASKS, FILTER_COMPLETED_TASKS, FILTER_ALL_TASKS, CLEAR_COMPLETED_TASKS } from 'src/store/action';

import { getHighestId } from './selectors';

const initialState = {
  tasks: [
    {
      id: 1,
      content: 'sortir les mouches',
      done: true,
    },
    {
      id: 2,
      content: 'sortir les mouches',
      done: true,
    },
    {
      id: 3,
      content: 'sortir les mouches',
      done: false,
    },
    {
      id: 4,
      content: 'sortir les mouches',
      done: false,
    },
  ],
  inputValue: '',
  tasksLeft:0,
  filteredTasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TASK_STATUS:
      const newTasksArray = [...state.tasks];
      const updtateTask = newTasksArray.find((element) => element.id === action.taskId);
      updtateTask.done = !updtateTask.done;

      return {
        ...state,
        tasks: newTasksArray,
        filteredTasks: newTasksArray,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.newValue,
      };
    case CREATE_NEW_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: getHighestId(state) + 1,
            content: state.inputValue,
            done: false,
          },
        ],
        filteredTasks: [
          ...state.tasks,
          {
            id: getHighestId(state) + 1,
            content: state.inputValue,
            done: false,
          },
        ],
        inputValue: '',
      };
      case FILTER_ACTIVE_TASKS:
        return {
          ...state,
          filteredTasks: state.tasks.filter((task) => task.done === false),
        };
      case FILTER_COMPLETED_TASKS:
        return {
          ...state,
          filteredTasks: state.tasks.filter((task) => task.done === true),
        };
      case FILTER_ALL_TASKS:
        return {
          ...state,
          filteredTasks: state.tasks,
        };
      case CLEAR_COMPLETED_TASKS:
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.done === false),
          filteredTasks: state.tasks.filter((task) => task.done === false),
        };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
