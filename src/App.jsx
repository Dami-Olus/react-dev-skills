import { useState } from 'react'
import './App.css'
import SkillList from './assets/components/SkillList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Dev Skills</h1>
      <SkillList />
    </>
  )
}

export default App
