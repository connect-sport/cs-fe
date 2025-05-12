const initialState = { name: "" };

interface UserState {
  name: string;
}

interface SetNameAction {
  type: "SET_NAME";
  payload: string;
}

type UserAction = SetNameAction;

export default function userReducer(
  state: UserState = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
