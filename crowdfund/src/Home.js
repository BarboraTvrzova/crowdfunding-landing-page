import React, {useState} from 'react'

import bookmark from "./images/icon-bookmark.svg"
import bookmarkedLogo from "./images/icom-bookmarked.svg" 
import "./Home.css"
import Header from "./components/Header"
import Stats from "./components/Stats"
import StandCard from "./components/StandCard"
import master from "./images/logo-mastercraft.svg"
import OptionsModal from "./components/OptionsModal"

const Home = ({options}) => {
  const[bookMarked, setBookmarked] = useState(false)

  const bookmarked = () => {
    if (!bookMarked) {
      setBookmarked(true)
      document.querySelector(".btn-bookmark").classList.add("bookmarked-green")
    } else {
      setBookmarked(false)
      document.querySelector(".btn-bookmark").classList.remove("bookmarked-green")

    }
    
  }

  const standsOptions = options.map((option) => {
    return (
        <StandCard
          key={option.key} 
          type={option.type}
          price={option.price} 
          description={option.description}
          left={option.left}
          disabled={option.left===0 ? "disabled" : ""} 
          />
      )
    }
  )

  return (
    <div className="home" id="home">
      <OptionsModal options={options}/>
      <Header />
      <div className="main-content">
        <div className="main-heading container content">
          <img src={master} alt="" className="master-logo"/>
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>A beautiful &#38; handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className="heading-buttons">
            <button className="btn green btn-large" onClick={() => {document.querySelector(".background-modal").classList.remove("modal-hidden")}}>Back this project</button>
            <button className="btn grey btn-bookmark"
            value="Bookmark" onClick={()=> bookmarked()}><img alt=""src={bookMarked ? bookmarkedLogo : bookmark}/>{bookMarked? "Bookmarked" : "Bookmark"}</button>
          </div>
        </div>
        <Stats />
        <div className="container content about" id="about">
          <h3>About this project</h3>
          <div className="about-text">
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
          </div>
          <div className="options">
              {standsOptions}
          </div>
        </div>   
      </div>   
    </div>
  )
}

export default Home
