import { isAdmin } from "../access/is-admin";
import type { CollectionConfig } from "payload";

export const UsersCollection: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  access: {
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
    read: () => true,
  },
  fields: [
    {
      name: "role",
      type: "select",
      options: ["admin", "user"],
      defaultValue: "user",
      required: true,
      saveToJWT: true,
    },
  ],
};
