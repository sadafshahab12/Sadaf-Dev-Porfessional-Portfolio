import { type SchemaTypeDefinition } from "sanity";
import services from "./schemas/services";
import skill from "./schemas/skill";
import skillCategory from "./schemas/skillCategory";
import project from "./schemas/project";
import cv from "./schemas/cv";
import personalInfo from "./schemas/personalInfo";
import featuredProjects from "./schemas/featuredProjects";
import contact from "./schemas/contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    services,
    skill,
    skillCategory,
    project,
    cv,
    personalInfo,
    featuredProjects,
    contact,
  ],
};
