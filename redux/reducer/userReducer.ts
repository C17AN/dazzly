const initialState = {
  username: null,
};

export default (state = initialState, { action, payload }) => {
  switch (action) {
    case "LOGIN_SUCCESS":
      return { ...state, ...payload };
    case "LOGOUT_SUCCESS":
      const emptyUserInfo = {};
      Object.keys(initialState).forEach((prop) => (emptyUserInfo[prop] = null));
      return { emptyUserInfo };
    default:
      return state;
  }
};
