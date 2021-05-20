import React from "react"
import './App.css';

import Home from "./Home"
const App = () => {

  const options = [
    {
      key:1,
      type:"Bamboo Stand",
      price: 25, 
      description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      left: 101
    },
    {
      key: 2,
      type:"Black Edition Stand",
      price:75, 
      description:"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      left:64
    },
    {
      key: 3,
      type:"Mahogany Special Edition",
      price: 125, 
      description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      left:0,
    }

  ]

  return (
    <div className="App">
      <Home options={options} />

    </div>
  )
}

export default App;
