import { defineField, defineType } from "sanity";

export default defineType({
  name: "skillCategory",
  title: "Skill Categories",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category Name",
      type: "string",
      description: "e.g., Frontend Development, Backend, AI",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "skillsList",
      title: "Skills",
      type: "array",
      of: [{ type: "skill" }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
    defineField({
      name: "color",
      title: "Theme Color",
      type: "string",
      description:
        "The Tailwind color for the bar (e.g., indigo, cyan, purple)",
      options: {
        list: [
          { title: "Indigo", value: "indigo" },
          { title: "Cyan", value: "cyan" },
          { title: "Purple", value: "purple" },
        ],
      },
    }),
  ],
});
