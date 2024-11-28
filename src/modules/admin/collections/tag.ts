import { isAdmin } from "../access/is-admin";
import type { CollectionConfig } from "payload";

export const TagsCollection: CollectionConfig = {
  slug: "tags",
  access: {
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
    read: () => true,
  },
  fields: [{ type: "text", name: "name", required: true }],
  admin: {
    useAsTitle: "name",
  },
};
