import React from 'react'
import "./SuccessSend.css"
import emailSent from "../../Assets/success.gif"

const SuccessSend = () => {
  return (
    <div className='succesSend-container'>
        <img className='sent-img' src={emailSent} alt="" />
        <div>Email sent successfully !</div>
    </div>
  )
}

export default SuccessSend