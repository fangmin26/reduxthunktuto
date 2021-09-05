
import React, { useState, useEffect } from 'react';
import { targetPatients} from "../redux/actions/actions"
import { useSelector, useDispatch } from "react-redux";
const Target = () => {
  const selected = useSelector((state) => state.targetPatient)
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(targetPatients())
}, [dispatch])
console.log(selected);
  return (
    <div>
      tart
    </div>
  )
}

export default Target
