import { groq } from "next-sanity";

export const resumeQuery = groq`*[_type == "resume"][0] {
  "downloadUrl": resumeFile.asset->url,
  title
}`;
