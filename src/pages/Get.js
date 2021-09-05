import React,{useState,useEffect} from 'react';
import {fetchPatients, targetPatients} from "../redux/actions/actions"
import { useSelector, useDispatch } from "react-redux";

const Get = () => {
  const [targetUser, setTargetUser] = useState('')
  const patients = useSelector((state) => state.allPatients.patients);
  const selected = useSelector((state) => state.targetPatient.targetPatient)
  console.log(selected)

  const dispatch = useDispatch();
  console.log(patients)
  useEffect(() => {
    dispatch(fetchPatients())
}, [])

  
  
  const onGetPatientClick = () => {
    for (let i = 0; i < patients.length; i++) {
      if (patients[i].name === "이순신") {
        // console.log(patients[i].name)
        setTargetUser(patients[i].name)
        dispatch(targetPatients(patients[i].name))
       }
    }
  }



  return (
    <div>
      {targetUser}
      <button
        onClick={ onGetPatientClick}
      >getPatient</button>
      {patients.map((el) =>
        <div key={el.id}>{ el.name}</div>)}
    </div>
  )
}

export default Get
