export const registerUser = userInfo => ({
  type: "REGISTER_USER",
  payload: userInfo
});

export const loginUser = userInfo => ({
  type: "LOGIN_USER",
  payload: userInfo
});
