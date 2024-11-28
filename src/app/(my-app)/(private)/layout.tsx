import { getMe } from "@/shared/payload";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isAuth = await checkAuth();
  const isAuth = await getMe();
  console.log("===isAuth===", isAuth);

  if (!isAuth) {
    redirect("/auth");
  }

  return children;
}
