import { FileText } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "resume",
  title: "Resume/CV",
  type: "document",

  icon: FileText,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Main Professional Resume",
      description: "e.g., Software Engineer Resume 2026",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "resumeFile",
      title: "Upload CV (PDF preferred)",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "date",
      initialValue: new Date().toISOString().split("T")[0],
    }),
  ],
});
