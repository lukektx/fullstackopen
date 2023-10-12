import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    const newLeft = left + 1
    setLeft(newLeft)
    setAll(allClicks.concat('L'))
    setTotal(right + newLeft)
  }
    

  const handleRightClick = () => {
    const newRight = right + 1
    setRight(newRight)
    setAll(allClicks.concat('R'))
    setTotal(newRight + left)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <History allClicks={allClicks} />
    </div>
  )
}

export default App
