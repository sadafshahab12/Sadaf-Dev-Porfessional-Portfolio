import { defineType, defineField } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";

export default defineType({
  name: "contact",
  title: "Contact Messages",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    defineField({ name: "name", title: "Client Name", type: "string" }),
    defineField({ name: "email", title: "Email Address", type: "string" }),

    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { title: "Full Stack Web App (MERN/Next.js)", value: "fullstack" },
          { title: "AI/Chatbot Integration", value: "ai" },
          { title: "UI/UX Design & Frontend", value: "design" },
          { title: "Consultation / Fix", value: "consultation" },
        ],
      },
    }),

    defineField({
      name: "budget",
      title: "Budget Range",
      type: "string",
      options: {
        list: [
          { title: "Less than $500", value: "<500" },
          { title: "$500 - $1,500", value: "500-1500" },
          { title: "$1,500 - $3,000", value: "1500-3000" },
          { title: "$3,000+", value: "3000+" },
        ],
      },
    }),

    defineField({
      name: "timeline",
      title: "Timeline",
      type: "string",
      options: {
        list: [
          { title: "Urgent (1-2 Weeks)", value: "urgent" },
          { title: "Standard (1 Month)", value: "standard" },
          { title: "Flexible", value: "flexible" },
        ],
      },
    }),

    defineField({ name: "message", title: "Message", type: "text" }),

    defineField({
      name: "socialHandle",
      title: "LinkedIn/Twitter Handle (Optional)",
      type: "string",
    }),

    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "projectType",
    },
  },
});
