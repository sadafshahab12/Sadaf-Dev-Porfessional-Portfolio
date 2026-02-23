import { Star } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "featuredProjects",
  title: "Home: Featured Projects",
  type: "document",
  icon: Star,
  fields: [
    defineField({
      name: "projects",
      title: "Selected Projects",
      type: "array",
      description: "Select the 3 projects to display on the Home page",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }], 
        },
      ],
      validation: (Rule) =>
        Rule.max(3).error("You can only feature up to 3 projects."),
    }),
  ],
});
