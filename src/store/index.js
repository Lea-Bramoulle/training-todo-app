/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';

import { CHANGE_TASK_STATUS } from 'src/store/action';

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
    {
      id: 5,
      content: 'sortir les mouches',
      done: false,
    },
    {
      id: 6,
      content: 'sortir les mouches',
      done: false,
    },
    {
      id: 7,
      content: 'sortir les mouches',
      done: false,
    },
    {
      id: 8,
      content: 'sortir les mouches',
      done: true,
    },
  ],
  inputValue: ' ',
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
