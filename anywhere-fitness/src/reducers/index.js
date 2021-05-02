import {
  FETCHING_CLASS_FAIL,
  FETCHING_CLASS_START,
  FETCHING_CLASS_SUCCESS,
  FETCHING_USER_FAIL,
  FETCHING_USER_START,
  FETCHING_USER_SUCCESS,
} from "../actions";

const initialState = {
  user: {
    user_id: 3,
    user_name: "Brad Pitt",
    user_username: "button",
    user_email: "brad@aol.com",
    user_level: "Profesional",
    user_subscribed: 1,
    role: "Instructor",
  },
  classes: [
    {
      class_id: 1,
      class_name: "Pro Pilates",
      class_type: "Pilates",
      class_start: "2021-08-24 14-30-00",
      class_duration: "1 hour",
      class_intensity: "Profesional",
      class_description:
        "High-Intensity Pilates, for those who are expirienced. Get ready to feel the burn!!!",
      class_instructor: "Jack Black",
    },
    {
      class_id: 111,
      class_name: "Tiger Yoga",
      class_type: "Yoga",
      class_start: "2021-05-10 10-30-00",
      class_duration: "30 mins",
      class_intensity: "Beginner",
      class_description: "Experience yoga with Tigers and Tiger King",
      class_instructor: "Joe Exotic",
    },
  ],
  passes: [
    {
      pass_id: 1,
      pass_name: "Monthly Pass",
      pass_price: "$60",
      pass_type: "Unlimited",
    },
    {
      pass_id: 2,
      pass_name: "One Week Pass",
      pass_price: "$20",
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
    case FETCHING_USER_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
