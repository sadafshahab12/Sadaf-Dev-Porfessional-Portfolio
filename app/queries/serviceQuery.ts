import { groq } from "next-sanity";

export const servicesQuery = groq`*[_type == "services"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  iconName,
  benefits,
  order
}`;