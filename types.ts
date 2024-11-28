export interface Movie {
  id: number;
  title: string;
  posterPath: string;
  rating: number;
  tags: string[];
  isFavorite: boolean;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    posterPath: "/placeholder.svg?height=450&width=300",
    rating: 8.8,
    tags: ["Sci-Fi", "Action"],
    isFavorite: false,
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    posterPath: "/placeholder.svg?height=450&width=300",
    rating: 9.3,
    tags: ["Drama"],
    isFavorite: true,
  },
  {
    id: 3,
    title: "The Dark Knight",
    posterPath: "/placeholder.svg?height=450&width=300",
    rating: 9.0,
    tags: ["Action", "Crime", "Drama"],
    isFavorite: false,
  },
  {
    id: 4,
    title: "Pulp Fiction",
    posterPath: "/placeholder.svg?height=450&width=300",
    rating: 8.9,
    tags: ["Crime", "Drama"],
    isFavorite: true,
  },
  {
    id: 5,
    title: "Forrest Gump",
    posterPath: "/placeholder.svg?height=450&width=300",
    rating: 8.8,
    tags: ["Drama", "Romance"],
    isFavorite: false,
  },
  {
    id: 6,
    title: "The Matrix",
    posterPath: "/placeholder.svg?height=450&width=300",
    rating: 8.7,
    tags: ["Sci-Fi", "Action"],
    isFavorite: true,
  },
  {
    id: 7,
    title: "Goodfellas",
    posterPath: "/placeholder.svg?height=450&width=300",
    rating: 8.7,
    tags: ["Crime", "Drama"],
    isFavorite: false,
  },
  {
    id: 8,
    title: "The Silence of the Lambs",
    posterPath: "/placeholder.svg?height=450&width=300",
    rating: 8.6,
    tags: ["Crime", "Drama", "Thriller"],
    isFavorite: false,
  },
];
