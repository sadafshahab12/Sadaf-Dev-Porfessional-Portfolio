import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const newsletterContent = defineType({
  name: "newsletterContent",
  title: "Newsletter Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required().error("Headline is required"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "subscriptionType",
      title: "Backend Subscription Type",
      type: "string",
      description: "Used for categorization (e.g. newsletter, waitlist)",
      initialValue: "newsletter",
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Join Now",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "successMessage",
      title: "Success Message",
      type: "string",
      initialValue: "You're on the list! 🎉",
    }),
  ],
});
