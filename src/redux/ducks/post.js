const GET_POST = 'GET_POST';

const initialState = {
  post: '',
};

const getPost = (id) => ({
  type: GET_POST,
  id,
});

const fetchPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, post: action.id };

    default:
      return state;
  }
};

export { getPost, GET_POST };
export default fetchPostReducer;
