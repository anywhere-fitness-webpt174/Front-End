import {
  FETCHING_CLASS_FAIL,
  FETCHING_CLASS_START,
  FETCHING_CLASS_SUCCESS,
  FETCHING_USER_FAIL,
  FETCHING_USER_START,
  FETCHING_USER_SUCCESS,
  UPDATE_CLASS_SUCCESS,
} from "../actions";

const initialState = {
  user: {
    user_id: "",
    user_name: "",
    user_username: "",
    user_email: "",
    user_level: "",
    user_subscribed: "",
    role: "",
  },
  classes: [],
  passes: [
    {
      pass_id: 1,
      pass_name: "Monthly Pass",
      pass_price: "60",
      pass_type: "Unlimited",
    },
    {
      pass_id: 2,
      pass_name: "One Week Pass",
      pass_price: "20",
      pass_type: "Punch",
    },
  ],
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
      };
    case FETCHING_USER_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case FETCHING_CLASS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_CLASS_SUCCESS:
      return {
        ...state,
        classes: action.payload,
        isFetching: false,
      };
    case FETCHING_CLASS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case UPDATE_CLASS_SUCCESS:
        
        return{
            ...state,
            classes: action.payload,
        }
    default:
      return state;
  }
};
