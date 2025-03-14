
export interface IMovieHeaderDetail {
    title: string,
    releaseDate: string,
    runtime?: string,
    vote_average?: number,
    vote_count?: number,
    threeD?: boolean | "3D",
}
export interface IMovieImage {
    description?: string | undefined,
    imagePath: string | undefined
}

export interface IMovieInfoDetail {
    genre: string[],
    original_language?: string,
    censorship?: string,
    certification?: string,
    description?: string,
}


export interface IMovieContentDetail extends IMovieInfoDetail {
    // DATOS QUE SI LLEGAN DEL BACKEND (JAVA)
    subtitle: boolean,
    adult: boolean,

}

export interface IMovie extends IMovieHeaderDetail, IMovieContentDetail {
    id: string,
    image: string,
}


export interface IMovieFromTHMDB {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}