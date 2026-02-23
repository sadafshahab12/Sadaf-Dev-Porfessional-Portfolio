// schemas/objects/skill.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Skill Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "level",
      title: "Expertise Level (%)",
      type: "number",
      description: "Percentage from 0 to 100",
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
  ],
});
