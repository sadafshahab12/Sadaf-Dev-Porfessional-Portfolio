import { defineType, defineField } from "sanity";
import { Zap } from "lucide-react";

export default defineType({
  name: "addOn",
  title: "Add-Ons",
  type: "document",
  icon: Zap,
  fields: [
    defineField({ name: "title", title: "Service Title", type: "string" }),
    defineField({ name: "description", title: "Service Description", type: "text" }),
    defineField({ name: "price", title: "Price Starting From", type: "string", description: "e.g., From $199" }),
  ],
});