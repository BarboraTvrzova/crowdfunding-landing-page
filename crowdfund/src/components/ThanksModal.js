import React from 'react'
import "./ThanksModal.css"
import done from "../images/icon-check.svg"

const ThanksModal = ({decide}) => {
  return (
    <div className="thanks">
      <img src={done} alt=""/>
      <h2>Thanks for your support!</h2>
      <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
      <a href="#home" className="btn green done" onClick={()=>{
       decide("")
       document.querySelector(".home").classList.remove("grey-background")
       
      }}>Got it</a>
    </div>
  )
}

export default ThanksModal
