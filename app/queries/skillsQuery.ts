import { groq } from "next-sanity";

export const skillsQuery = groq`*[_type == "skillCategory"] | order(order asc) {
  _id,
  category,
  color,
  skillsList[] {
    name,
    level
  }
}`;
