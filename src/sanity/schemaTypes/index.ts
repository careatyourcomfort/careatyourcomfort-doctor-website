import { SchemaTypeDefinition } from "sanity";
import { post } from "./post";
import { category } from "./category";

export const schemaTypes: SchemaTypeDefinition[] = [post, category];
