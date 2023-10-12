import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Stat = ({text, num}) => {
  return(
    <tr>
      <th>{text}</th>
      <th>{num}</th>
    </tr>
  )
}
const Statistics = ({good, neutral, bad}) => {
  const total = () => good + bad + neutral
  const average = () => (good - bad) / (total())
  const positive = () => good / total()
  if(total() === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <Stat text="Good" num={good}/>
        <Stat text="Neutral" num={neutral}/>
        <Stat text="Bad" num={bad}/>
        <Stat text="All" num={total()}/>
        <Stat text="Average" num={average()}/>
        <Stat text="Positive" num={positive() + ' %'}/>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="Give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text={"Bad"}/>
      <Header text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App