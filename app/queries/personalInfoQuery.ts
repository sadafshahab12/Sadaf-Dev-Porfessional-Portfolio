import { groq } from "next-sanity";

export const personalInfoQuery = groq`*[_type == "personalInfo"][0] {
  name,
  title,
  email,
  bio,
  about,
  linkedin,
  github,
  "imageUrl": profileImage.asset->url
}`;
