  
import { combineReducers } from "redux";

import { patientsReducer,targetPatientReducer } from "./reducers/patientsReducer";

const rootReducers = combineReducers({
  allPatients: patientsReducer,
  targetPatient: targetPatientReducer
});
export default rootReducers;