import { useState } from "react";
import "./NewSkillForm.css";

function NewSkillForm() {
  const [skill, setSkill] = useState({ name: "", level: 3 });
  const handleSkillChange = (e) => {
    setSkill({
      ...skill,
      name: e.target.value,
    });
  };
  const handleLevelChange = (e) => {
    setSkill({
      ...skill,
      level: e.target.value,
    });
  };

  const handleNewSkill = (e) => {
    e.preventDefault();
    addNewSkill(skill);
    setSkill({ name: "", level: 3 });
  };
  return (
    <div>
      <form action="" className="NewSkillForm" onSubmit={handleNewSkill}>
        <label htmlFor="">
          Skill
          <input type="text" onChange={handleSkillChange} value={skill.name} />
        </label>

        <label htmlFor="">
          Level
          <select onChange={handleLevelChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <button className="button" type="submit">
          ADD SKILL
        </button>
      </form>
    </div>
  );
}

export default NewSkillForm;
