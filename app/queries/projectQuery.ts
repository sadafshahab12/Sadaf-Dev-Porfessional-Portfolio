import { groq } from "next-sanity";

export const projectQuery = groq`*[_type == "project"] | order(_createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        description,
        mainImage,
        category,
        tags,
        demoLink,
        githubLink,
        _createdAt
      }`;
