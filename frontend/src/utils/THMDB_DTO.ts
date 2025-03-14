import { IMovie, IMovieFromTHMDB } from "@/common/interface-movie";
import genres from "@/data/only-front/genres.json"


function getGenres(genreIds: number[]): string[] {
    const genresToString = genreIds.map(id => {
        let genre = genres.find(g => g.id === id)
        if (genre) return genre.name;
    }).filter(Boolean) as string[];

    return genresToString;
}



export default function transformMoviesList(movies: IMovieFromTHMDB[]): IMovie[] {
    const moviesToReturn: IMovie[] = movies.map((movie) => ({
        image: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
        subtitle: movie.original_language != "es" ? true : false,
        adult: movie.adult,
        genre: getGenres(movie.genre_ids),
        title: movie.title ?? movie.original_title,
        releaseDate: movie.release_date,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        description: movie.overview,
        original_language: movie.original_language,
        id: movie.id.toString(),
    }));
    return moviesToReturn;
}


/* ORIGINAL CODE
    backdrop_path: string;
    original_title: string;
    popularity: number;
    video: boolean;
*/
// DATOS QUE FALTAN ASIGNAR DESDE LA API
// runtime?: string,
// threeD?: boolean | "3D",
// censorship?: string,
// certification?: string,