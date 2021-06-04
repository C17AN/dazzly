const initialState = {
  isSignedIn: false,
  activeUser: null,
};

export default (state = initialState, { action, payload }) => {
  switch (action) {
    case "LOGIN_SUCCESS":
      return { ...state, isSignedIn: true, activeUser: action.payload };
    case "LOGOUT_SUCCESS":
      return { ...state, ...payload };

    default:
      return state;
  }
};
