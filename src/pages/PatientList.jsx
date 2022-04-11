import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Topbar from '../components/Topbar/Topbar'
import './PatientList.css'

export default function PatientList() {
  return (
    <div className = 'patientList'>
        <Sidebar />
        <div className = 'rightside'><Topbar /></div>
    </div>
  )
}
