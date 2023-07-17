import "./SkillListItem.css";

function SkillListItem({ skills }) {
  return (
    <div className="list-item">
      <li>
        {skills.name} <span className="level">{`level ${skills.level}`}</span>
      </li>
    </div>
  );
}

export default SkillListItem;
