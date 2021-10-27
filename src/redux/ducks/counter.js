const ADD = 'add';

const SUBTRACT = 'subtract';

const initialState = {
  count: 0,
};

const add = () => ({
  type: ADD,
});

const subtract = () => ({
  type: SUBTRACT,
});

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 };

    case SUBTRACT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

export { add, subtract };
export default counterReducer;
