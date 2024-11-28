import type { CollectionConfig } from "payload";
import { isAdmin } from "../access/is-admin";

export const MoviesCollection: CollectionConfig = {
  slug: "movies",
  access: {
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
    read: () => true,
  },
  fields: [
    { type: "text", name: "name", required: true },
    { type: "upload", relationTo: "media", name: "poster", required: true },
    {
      type: "relationship",
      relationTo: ["tags"],
      name: "tags",
      required: true,
      hasMany: true,
    },
  ],
};
