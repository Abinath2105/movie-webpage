import React, { useState } from "react"
import Upcomming from "../upcoming/Upcomming"
import { upcomeseries, latestseries, recommendseries, comedyseries } from "../../dummyData"

const Series = () => {
  const [items, setItems] = useState(upcomeseries)
  const [item, setItem] = useState(latestseries)
  const [rec, setRec] = useState(recommendseries)
  const [itemss, setItemss] = useState(comedyseries)
  return (
    <>
      
      <Upcomming items={items} title='Popular Series' />
      <Upcomming items={item} title='Drama ' />

      <Upcomming items={itemss} title='Comedy' />

      <Upcomming items={rec} title='Recommended Series' />
    </>
  )
}

export default Series
