export const setLoginTrue = (data) => {
  return {
    type: "LOGIN_TRUE",
    payload: data,
  };
}

export const setLoginfalse = () => {
  return {
    type: "LOGIN_FALSE",
  };
};