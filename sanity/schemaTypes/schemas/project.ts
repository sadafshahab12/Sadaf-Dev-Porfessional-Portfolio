import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "mainImage",
      title: "Project Thumbnail",
      type: "image",
      options: {
        hotspot: true, // Crucial for responsive cropping
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Web Development", value: "Web" },
          { title: "Artificial Intelligence", value: "AI" },
          { title: "Digital Marketing", value: "Marketing" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Technologies/Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "demoLink",
      title: "Live Demo URL",
      type: "url",
    }),
    defineField({
      name: "githubLink",
      title: "GitHub Repository URL",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});
