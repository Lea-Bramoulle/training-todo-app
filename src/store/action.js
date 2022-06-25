export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CREATE_NEW_TASK = 'CREATE_NEW_TASK';

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
