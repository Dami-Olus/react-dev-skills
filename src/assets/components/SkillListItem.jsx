function SkillListItem({skills}) {
  return (
    <div>
      <li>{skills.name} <span>{skills.level}</span></li>
    </div>
  );
}

export default SkillListItem;
