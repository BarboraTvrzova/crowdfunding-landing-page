import React from 'react'
import "./StandCard.css"

const StandCard = ({type, price, description, left, disabled}) => {
  return (
    <div className = {disabled === "disabled" ? "card disabled" : "card"} >
      <div className="card-heading"><h4>{type}</h4><span>Pledge ${price} or more</span>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="select">
        <div className="left">
          {left} <span>left</span> 
        </div>
        <button onClick={() => {document.querySelector(".background-modal").classList.remove("modal-hidden")}} className="btn green reward">Select Reward</button>
      </div>

    </div>
  )
}

export default StandCard
