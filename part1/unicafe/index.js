import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
     return (
      <div>
        <p>{props.text} {props.value}</p>
      </div>
    )

}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average , setAverage] = useState(0)
  const [positive , setPositive] = useState(0)
  const [anyClick , setAny] = useState(0)

  const handdleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
    setAny(anyClick+1)
  }
  const handdleNeutralClick = () => {
    setAll(all + (1))
    setNeutral(neutral + 1)
    setAny(anyClick+1)
  }
  const handdleBadClick = () => {
    setAll(all+1)
    setBad(bad + 1)
    setAny(anyClick+1)
  }

  const Button = ({ onClick, text }) => {
    setAverage((100/all)*0.1)
    setPositive(Math.abs((good*(-bad)/all)*100)+"%")
    return (
      <button onClick={onClick}>
        {text}
      </button>)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handdleGoodClick} text='good' />
      <Button onClick={handdleNeutralClick} text='neutral' />
      <Button onClick={handdleBadClick} text='bad' />
      <h1>statistics</h1>
      {anyClick > 0 && <Statistics text="good" value={good} /> }
      {anyClick > 0 && <Statistics text="neutral" value={neutral} /> }
      {anyClick > 0 && <Statistics text="bad" value={bad} />}
      {anyClick > 0 && <Statistics text="all" value={all}/>}
      {anyClick > 0 && <Statistics text="average" value={average}/>}
      {anyClick > 0 && <Statistics text="positive" value={positive}/>}  
      {anyClick < 1 && <p>no feedback given</p>} 
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)