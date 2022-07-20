const inputInitialState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        value: action.value,
        isTouched: state.isTouched,
      };
    case "BLUR":
      return {
        isTouched: true,
        value: state.value,
      };
    case "RESET":
      return inputInitialState;
    default:
      return inputReducer;
  }
};

export default inputReducer;
export { inputInitialState };
