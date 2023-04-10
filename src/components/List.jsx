import React, { useState } from 'react'
import data from '../data'
const List = () => {
  const [value, setValue] = useState(data)
  const clearList = () => {
    setValue([])
  }
  return (
    <div>
      <section className="container">
        <h2>Birthday Reminder - Starter</h2>
        <h5>{value.length} Birthdays today</h5>
        <section>
          {value.map((i) => {
            return (
              <div key={i.id}>
                <article className="person">
                  <img className="img" src={i.image} alt={i.name}></img>
                  <h3>{i.name}</h3>
                  <h4>{i.age}</h4>
                </article>
              </div>
            )
          })}
        </section>
        <button className="btn btn-block" onClick={clearList}>
          Clear List
        </button>
      </section>
    </div>
  )
}

export default List
