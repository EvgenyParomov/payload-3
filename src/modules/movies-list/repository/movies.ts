import { Media, Movie as PayloadMovie } from "@/modules/admin/payload-types";
import { getAppPayload } from "@/shared/payload";
import { Movie } from "../domain/movie";

export const getMoviesList = async () => {
  const payload = await getAppPayload();
  const movies = await payload.find({
    collection: "movies",
    depth: 1,
    pagination: false,
  });
  return movies.docs.map(mapMovie);
};

function mapMovie(movie: PayloadMovie): Movie {
  return {
    id: movie.id,
    title: movie.name,
    posterPath: mapMedia(movie.poster),
    rating: 10,
    tags: [],
    isFavorite: false,
  };
}

function mapMedia(media: number | Media): string {
  if (typeof media === "number") {
    return "https://via.placeholder.com/150";
  }
  return media.url || "";
}
