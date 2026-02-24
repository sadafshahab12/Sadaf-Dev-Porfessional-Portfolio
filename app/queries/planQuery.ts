import { groq } from "next-sanity";

export const planQuery = groq`*[_type == "plan"] | order(price asc) {
        _id,
        name,
        price,
        description,
        "iconName": icon, 
        features,
        notIncluded,
        cta,
        popular,
        gradient
      }`;
