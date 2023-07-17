import React from "react";
import SkillListItem from "./SkillListItem";

function SkillList({ skills }) {
  return (
    <div>
      <ul>
        {skills.map((skill) => (
          <SkillListItem skills={skill} />
        ))}
      </ul>
    </div>
  );
}

export default SkillList;
