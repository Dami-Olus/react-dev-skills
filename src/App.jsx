import { useState } from 'react'
import './App.css'
import NewSkillForm from './assets/components/NewSkillForm'
import SkillList from './assets/components/SkillList'

// const skills = [
//   { name: "HTML", level: 5 },
//   { name: "CSS", level: 3 },
//   { name: "JavaScript", level: 4 },
//   { name: "Python", level: 2 },
// ];

function App() {
  const [count, setCount] = useState(0)
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ])

  return (
    <>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm />
    </>
  )
}

export default App
