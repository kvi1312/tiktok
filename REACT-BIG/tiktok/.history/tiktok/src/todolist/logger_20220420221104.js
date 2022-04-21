function logger(reducer) {
  return (prevState, action) => {
    console.group(action.type);
    console.log('Prev state :', prevSate);
    const newState = reducer(prevState, action);
    console.groupEnd()
    return newState;
  };
}
export default logger;