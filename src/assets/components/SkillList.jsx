import React from "react";
import SkillListItem from "./SkillListItem";
import "./SkillList.css";

function SkillList({ skills }) {
  return (
    <div className="list">
      <ul>
        {skills.map((skill) => (
          <SkillListItem skills={skill} />
        ))}
      </ul>
    </div>
  );
}

export default SkillList;
