import { useState } from 'react'
import './App.css'
import NewSkillForm from './components/NewSkillForm'
import SkillList from './components/SkillList'

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

  function addNewSkill(skill) {
    setSkills([...skills, skill])
  }

  return (
    <div className='App'>
      <h1 className='teal-text'>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm addNewSkill={addNewSkill}/>
    </div>
  )
}

export default App
