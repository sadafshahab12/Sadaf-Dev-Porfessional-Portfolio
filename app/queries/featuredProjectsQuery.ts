import { groq } from "next-sanity";

export const featuredProjectsQuery = groq`*[_type == "featuredProjects"][0] {
  projects[]-> {
    _id,
        title,
        "slug": slug.current,
        description,
        mainImage,
        category,
        tags,
        demoLink,
        githubLink,
  }
}`;
