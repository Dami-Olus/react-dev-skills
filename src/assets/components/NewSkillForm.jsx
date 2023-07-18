import "./NewSkillForm.css";

function NewSkillForm() {
  return (
    <div >
      <form action="" className="NewSkillForm">
        <label htmlFor="">
          Skill
          <input type="text" />
        </label>

        <label htmlFor="">
          Level
          <select>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </label>
        <button className="button">ADD SKILL</button>
      </form>
    </div>
  );
}

export default NewSkillForm;
