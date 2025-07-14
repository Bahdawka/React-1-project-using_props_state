import { useState } from 'react'
import randomizer from '../utils/randomizer'

interface RandomProps {
  min: number
  max: number
}

const Button = ({ min, max }: RandomProps) => {
  const [num, setNum] = useState(0)

  const ChangeNumButton = () => {
    setNum(randomizer(min, max))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={ChangeNumButton}>Change Number</button>
    </div>
  )
}

export default Button