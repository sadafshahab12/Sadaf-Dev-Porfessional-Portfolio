import { type SchemaTypeDefinition } from "sanity";
import services from "./schemas/services";
import skill from "./schemas/skill";
import skillCategory from "./schemas/skillCategory";
import project from "./schemas/project";
import cv from "./schemas/cv";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, skill, skillCategory, project, cv],
};
