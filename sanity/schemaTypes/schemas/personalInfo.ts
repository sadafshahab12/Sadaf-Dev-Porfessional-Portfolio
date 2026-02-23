import { User } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "personalInfo",
  title: "Personal Info",
  type: "document",
  icon: User,
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Professional Title",
      type: "string",
      description: "e.g., Full Stack Developer & AI Specialist",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "Short Bio (Hero Section)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "about",
      title: "Long About Me",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "github",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
