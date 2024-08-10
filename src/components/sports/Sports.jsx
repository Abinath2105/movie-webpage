import React, { useState } from "react"
import Upcommingtv from "../upcoming/Upcomimngtv"
import {upcomesports, latestsports, recommendsports, comedysports } from "../../dummyData"

const Sports = () => {
  const [items, setItems] = useState(upcomesports)
  const [item, setItem] = useState(latestsports)
  const [rec, setRec] = useState(recommendsports)
  const [itemss, setItemss] = useState(comedysports)
  return (
    <>
      
      <Upcommingtv items={items} title='Live Streaming ' />
      <Upcommingtv items={item} title='Live Matches' />

      <Upcommingtv items={itemss} title='Highlights' />

      <Upcommingtv items={rec} title='Recommended Matches' />
    </>
  )
}

export default Sports
