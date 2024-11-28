import type { CollectionConfig } from "payload";

export const TagsCollection: CollectionConfig = {
  slug: "tags",
  fields: [{ type: "text", name: "name", required: true }],
  admin: {
    useAsTitle: "name",
  },
};
