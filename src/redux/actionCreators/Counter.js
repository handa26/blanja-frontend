export const addCounterCreator = () => {
  return {
    type: "ADD_COUNTER",
    // Payload is optional
  }
}

export const subCounterCreator = () => {
  return {
    type: "SUB_COUNTER",
    // Payload is optional
  };
};