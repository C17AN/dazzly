interface IAction {
  type: string;
  payload: string;
}

const initialState = {
  isSignedIn: false,
  activeUser: null,
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isSignedIn: true, activeUser: action.payload };
    case "LOGOUT_SUCCESS":
      return { isSignedIn: false, activeUser: null };

    default:
      return state;
  }
};
