import { MoviesListServer } from "@/modules/movies-list";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <MoviesListServer />
    </main>
  );
}
