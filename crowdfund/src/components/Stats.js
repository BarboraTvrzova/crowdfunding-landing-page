import React from 'react'
import "./Stats.css"

export const Stats = () => {
  return (
    <div className="stats container content">
      <div className="numbers">
        <div className="earned">
          <h2>$89,914</h2>
          <p>of $100,000 backed</p>
        </div>
        <div className="backers">
          <h2>5,007</h2>
          <p>total backers</p>
        </div>
        <div className="days">
          <h2>56</h2>
          <p>days left</p>
        </div>
      </div>
      <div className="progres-bar">
        <div className="progres"></div>
      </div>
      
    </div>
  )
}

export default Stats



