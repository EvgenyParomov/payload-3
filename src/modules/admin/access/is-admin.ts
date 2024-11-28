import type { Access } from "payload";

export const isAdmin: Access = ({ req: { user }, id }) => {
  // Allow users with a role of 'admin'
  if (user?.role === "admin") {
    return true;
  }

  // allow any other users to update only oneself
  return user?.id === id;
};
