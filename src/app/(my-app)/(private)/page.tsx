import { MoviesListServer } from "@/modules/movies-list";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/auth">Login</Link>
      <MoviesListServer />
    </main>
  );
}
