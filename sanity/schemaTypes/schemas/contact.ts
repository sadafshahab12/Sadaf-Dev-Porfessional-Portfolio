// sanity/schemas/contact.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Messages",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text" }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});