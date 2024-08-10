import React, { useState } from "react"
import Upcommingtv from "../upcoming/Upcomimngtv"
import {upcometv, latesttv, recommendtv, comedytv } from "../../dummyData"

const Tvshow = () => {
  const [items, setItems] = useState(upcometv)
  const [item, setItem] = useState(latesttv)
  const [rec, setRec] = useState(recommendtv)
  const [itemss, setItemss] = useState(comedytv)
  return (
    <>
      
      <Upcommingtv items={items} title='Popular TV Shows' />
      <Upcommingtv items={item} title='Most Watched' />

      <Upcommingtv items={itemss} title='Entertainment' />

      <Upcommingtv items={rec} title='Recommended Shows' />
    </>
  )
}

export default Tvshow
