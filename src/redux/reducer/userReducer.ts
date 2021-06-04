interface IAction {
  type: string;
  payload: {
    id: any;
    username: string;
  };
}

interface IEmptyUser {
  [key: string]: null;
}

const initialState = {
  username: null,
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, ...action.payload };
    case "LOGOUT_SUCCESS":
      const emptyUserInfo: IEmptyUser = {};
      Object.keys(initialState).forEach((prop) => (emptyUserInfo[prop] = null));
      return { emptyUserInfo };
    default:
      return state;
  }
};
