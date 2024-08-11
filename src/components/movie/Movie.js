import React, { useState } from "react"
import Upcomming from "../upcoming/Upcomming"
import { latest, latestmovie, recommend, recommended, upcome, upcomemovie ,comedymovie } from "../../dummyData"
import "./movie.css"
const Movie = () => {
  const [items, setItems] = useState(upcomemovie)
  const [item, setItem] = useState(latestmovie)
  const [rec, setRec] = useState(recommend)
  const [itemss, setItemss] = useState(comedymovie)
  return (
    <>
      <div className="movieapp">
      <Upcomming items={items} title='Popular Movies' />
      <Upcomming items={item} title='Action Movies' />

      <Upcomming items={itemss} title='Comedy Movies' />

      <Upcomming items={rec} title='Recommended Movies' />
      </div>
    </>
  )
}

export default Movie
