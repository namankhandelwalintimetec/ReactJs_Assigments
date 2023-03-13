const initialState: number = 0;

interface ActionType {
  type: string;
  paylod: string;
}

const changeState = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "Increament":
      return state + Number(action.paylod);
    case "Decreament":
      if (state - Number(action.paylod) < 0) {
        return (state = 0);
      }
      return state - Number(action.paylod);
    case "Reset":
      return (state = 0);
    default:
      return state;
  }
};

export default changeState;
