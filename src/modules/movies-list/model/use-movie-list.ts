import { useState, useMemo } from "react";
import { Movie } from "../domain/movie";

export function useMovieList(movies: Movie[]) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    movies.forEach((movie) => movie.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const filteredMovies = useMemo(() => {
    return movies
      .filter(
        (movie) =>
          (searchTerm === "" ||
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
          (selectedTags.length === 0 ||
            selectedTags.every((tag) => movie.tags.includes(tag))),
      )
      .map((movie) => ({
        ...movie,
        isFavorite: favorites.includes(movie.id),
      }));
  }, [searchTerm, selectedTags, favorites]);

  const handleToggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return {
    favorites,
    searchTerm,
    setSearchTerm,
    selectedTags,
    allTags,
    filteredMovies,
    handleToggleFavorite,
    handleTagSelect,
  };
}
