import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constants";

export const initState = {
  job: "",
  jobs: [],
};
// 3. Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };

    default:
      throw new Error("Invalid Action");
  }
};

export default reducer;
