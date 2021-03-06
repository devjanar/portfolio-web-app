import {
  ADD_SUCCESS,
  SEND_SUCCESS,
  RECEIVE_ERROR,
} from '../actions/contactAction'

const initialState = {
  inProgress: false,
  data: null,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUCCESS:
      return { inProgress:true, error:false};
    case SEND_SUCCESS:
      return {...action.data, inProgress:false, error:false};
    case RECEIVE_ERROR:
      return { inProgress:false, error:true};
    default:
      return state
  }
}
