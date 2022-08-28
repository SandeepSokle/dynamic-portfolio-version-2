const getDataReducer = (state = {}, action) => {
  // console.log("In getReducer : ", action)
  switch (action.type) {
    case "GET_DATA":
      let newDa = { ...action.payload, user: state.user };
      // console.log(action.payload, state);
      return newDa;
    case "LOG_IN":
      return { ...state, user: action.payload };
    case "LOG_OUT":
      return { ...state, user: null };
    default:
      return { ...state };
  }
};

export default getDataReducer;
