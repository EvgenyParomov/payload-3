import { isAdmin } from "../access/is-admin";
import type { CollectionConfig } from "payload";

export const MediaCollection: CollectionConfig = {
  slug: "media",
  access: {
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: true,
};
