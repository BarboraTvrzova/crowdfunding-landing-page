import React, {useState} from 'react'
import "./OptionsModal.css"
import close from "../images/icon-close-modal.svg"
import ThanksModal from "./ThanksModal"


const OptionsModal = ({options}) => {
  const [activeCard, setActiveCard]= useState("")
  const [activeModal, setActiveModal]=useState("")
  const [payment, setPayment]=useState(null)

  const decide =(h) => {
    setActiveModal(h)
    setActiveCard("")
    setPayment(null)
  }
  const onCardClick = (index) => {
    setActiveCard(index)
  } 

  const show = options.map((option) => {
    const active = option.type===activeCard? "active" : ""
    
    return (
      <div key ={option.key} className={`${active}-card margin`}>
        <div className={option.left === 0 ? "card modal-option disabled" : `${active} card modal-option`} >
          <input type="radio" name="stands" id={option.key}
          disabled={option.left=== 0? true : false} 
          value={option.type}
          onClick={()=>{onCardClick(option.type)}}
          />
          <label htmlFor={`${option.key}`}>
            <div className="card-info">
              <h3>{option.type} <span>Pledge ${option.price} or more</span> <div className="left">{option.left}<span>left</span></div></h3>
              <p>{option.description}</p>
            </div>
          </label>
        </div>
        <div className={`${active}card-payment`}>
          <p>Enter your pledge</p>
          <div className="input-submit">
            <div className="btn enter-pledge">$
             <input name="payment" className="payment" type="number" min={`${option.price}`} placeholder={option.price}  disabled={option.left=== 0? true : false} value={payment} onChange={(e)=>{setPayment(e.target.value)}}/>
            </div>
            <button className={`${payment<option.price?"stop":""} btn green submit-pledge`}disabled={payment<option.price? true:false} onClick={()=>{
            decide("thanks")
            ;
          }}>Continue</button>
          </div>
        </div>
      </div>
    )
  })
  const modal = activeModal==="thanks" ? "thanks" : ""
  if(modal==="thanks") {
    document.querySelector(".home").classList.add("grey-background")

    return <ThanksModal decide={decide}/>
  } else {
  return (
    <div className="background-modal modal-hidden">
      <div className="options-modal">
        <img onClick={()=>{document.querySelector(".background-modal").classList.add("modal-hidden")
      }}className="close-modal"src={close} alt=""/>
        <h2>Back This Project</h2>
        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        <div className="stands">
          <div className={`${activeCard==="no-reward"?"active":""}-card margin`}>
            <div className={`${activeCard==="no-reward"?"active":""} card modal-option`}>
              <input type="radio" name="stands" value="nothing" id="no-stand"
              onClick={()=>{onCardClick("no-reward")}}
              /> 
              <label htmlFor="no-stand">
                <div className="card-info">
                  <h3 className="single-line">Pledge with no reward</h3>
                  <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                </div>
              </label>
            </div>
            <div className={`${activeCard==="no-reward"?"active":""}card-payment`}>
              <p>Enter your pledge</p>
              <div className="input-submit">
                <div className="btn enter-pledge">$
                <input name="title undefined" className="payment" type="number" />
                </div>
                <button onClick={()=>{
            decide("thanks")}} className="btn green submit-pledge" >Continue</button>
              </div>
            </div>
          </div>
          {show}
        </div>
      </div>
    </div>
  )
}}

export default OptionsModal
