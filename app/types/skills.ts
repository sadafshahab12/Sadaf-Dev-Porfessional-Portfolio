export interface IndividualSkill {
  name: string;
  level: number;
}

export interface SkillCategory {
  _id: string;
  category: string;
  color: "indigo" | "cyan" | "purple";
  skillsList: IndividualSkill[];
}
