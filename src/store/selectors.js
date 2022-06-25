export const getHighestId = (state) => {
    const ids = state.tasks.map((m) => m.id);
  
    return Math.max(...ids);
  };