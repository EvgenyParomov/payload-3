import Image from "next/image";
import { Star, Heart } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { Movie } from "@/modules/movies-list/domain/movie";

interface MovieCardProps {
  movie: Movie;
  onToggleFavorite: (id: number) => void;
}

export function MovieCard({ movie, onToggleFavorite }: MovieCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <Image
          src={movie.posterPath}
          alt={`${movie.title} poster`}
          width={300}
          height={450}
          className="w-full h-auto object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white/90"
          onClick={() => onToggleFavorite(movie.id)}
        >
          <Heart
            className={
              movie.isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"
            }
          />
        </Button>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold line-clamp-2 mb-2">
          {movie.title}
        </h2>
        <div className="flex items-center mb-2">
          <Star className="text-yellow-400 mr-1" />
          <span>{movie.rating.toFixed(1)}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {movie.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
