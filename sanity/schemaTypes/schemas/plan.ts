import { defineType, defineField } from "sanity";
import { Star } from "lucide-react";

export default defineType({
  name: "plan",
  title: "Pricing Plans",
  type: "document",
  icon: Star,
  fields: [
    defineField({ name: "name", title: "Plan Name", type: "string" }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: "e.g., $299 or Custom",
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "features",
      title: "Included Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "notIncluded",
      title: "Not Included Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "cta", title: "Call to Action Text", type: "string" }),
    defineField({
      name: "popular",
      title: "Is Popular?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "gradient",
      title: "Gradient Theme",
      type: "string",
      options: {
        list: [
          {
            title: "Blue to Cyan (Starter)",
            value: "from-blue-500 to-cyan-400",
          },
          {
            title: "Indigo to Purple (Professional)",
            value: "from-indigo-500 to-purple-500",
          },
          {
            title: "Amber to Orange (Premium)",
            value: "from-amber-500 to-orange-500",
          },
        ],
      },
    }),
  ],
});
