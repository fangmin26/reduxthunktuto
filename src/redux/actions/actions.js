import { ActionTypes } from "./action-types";
import baseURL from "../data/baseUrl";
import axios from"axios"

export const fetchPatients = () => {
  return async function (dispatch, getState) {
    const response = await axios.get(baseURL.DB_URL +"patients");
    dispatch({ type: ActionTypes.FETCH_PATIENTS, payload: response.data });
  };
};

export const targetPatients = (target,) => {
  return {
    type: ActionTypes.TARGET_PATIENT,
    payload: target,
    
  }

  // return function (dispatch, getState) {
  //   const pushTarget = target.targetPatient.push(action.target)
  //   dispatch({ type: ActionTypes.TARGET_PATIENT, payload: pushTarget });
  // };
}
