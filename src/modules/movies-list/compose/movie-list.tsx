"use client";

import { MovieCard } from "../ui/movie-card";
import { SearchBar } from "../ui/search-bar";
import { FilterBar } from "../ui/filter-bar";
import { useMovieList } from "../model/use-movie-list";
import { Movie } from "../domain/movie";

export default function MovieList({ movies }: { movies: Movie[] }) {
  const {
    searchTerm,
    setSearchTerm,
    selectedTags,
    allTags,
    filteredMovies,
    handleToggleFavorite,
    handleTagSelect,
  } = useMovieList(movies);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <FilterBar
          tags={allTags}
          selectedTags={selectedTags}
          onTagSelect={handleTagSelect}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}
