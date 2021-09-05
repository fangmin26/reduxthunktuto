import { ActionTypes } from "../actions/action-types";
const initialState = {
  patients: [],
  targetPatient:[]

};
/*patientReducer*/
export const patientsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PATIENTS:
      return { ...state, patients: payload };

    default:
      return state;
  }
};
export const targetPatientReducer = (state = initialState, { type, payload, }) => {
  switch (type) {
    case ActionTypes.TARGET_PATIENT:
      return { ...state, targetPatient: payload }
      // return {...state, targetPatient:payload}
    default:
      return state;
  }
};