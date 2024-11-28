import { getMoviesList } from "../repository/movies";
import MovieList from "./movie-list";

export async function MoviesListServer() {
  const moviesList = await getMoviesList();
  return <MovieList movies={moviesList} />;
}
