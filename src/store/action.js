export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CREATE_NEW_TASK = 'CREATE_NEW_TASK';
export const FILTER_ACTIVE_TASKS = 'FILTER_ACTIVE_TASKS';
export const FILTER_COMPLETED_TASKS = 'FILTER_COMPLETED_TASKS';
export const FILTER_ALL_TASKS = 'FILTER_ALL_TASKS';

export const changeTaskStatus = (taskId) => ({
  type: CHANGE_TASK_STATUS,
  taskId,
});

export const changeInputValue = (newValue) => ({
  type: CHANGE_INPUT_VALUE,
  newValue,
});

export const createTask = () => ({
  type: CREATE_NEW_TASK,
})

export const filterActiveTasks = () => ({
  type: FILTER_ACTIVE_TASKS,
});

export const filterCompletedTasks = () => ({
  type: FILTER_COMPLETED_TASKS,
});

export const filterAllTasks = () => ({
  type: FILTER_ALL_TASKS,
});