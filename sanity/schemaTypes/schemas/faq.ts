import { defineType, defineField } from "sanity";
import { HelpCircle } from "lucide-react";

export default defineType({
  name: "faq",
  title: "Frequently Asked Questions",
  type: "document",
  icon: HelpCircle,
  fields: [
    defineField({ name: "question", title: "Question", type: "string" }),
    defineField({ name: "answer", title: "Answer", type: "text" }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Used to sort FAQs on the page",
    }),
  ],
});
