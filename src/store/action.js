export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';

export const changeTaskStatus = (taskId) => ({
  type: CHANGE_TASK_STATUS,
  taskId,
});
