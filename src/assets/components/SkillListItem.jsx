import "./SkillListItem.css";

function SkillListItem({ skills }) {
  return (
    <div className="SkillListItem">
      <li>
        {skills.name} <span className="level">{`level ${skills.level}`}</span>
      </li>
    </div>
  );
}

export default SkillListItem;
