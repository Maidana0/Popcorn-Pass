
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
}
export interface IMovieDescription {
    description: string,
}

export interface IMovieContentDetail extends IMovieInfoDetail, IMovieDescription {
    // DATOS QUE SI LLEGAN DEL BACKEND (JAVA)
    subtitle: boolean,
    adult: boolean,

}

export interface IMovie extends IMovieHeaderDetail, IMovieContentDetail {
    id: string,
    image: string,
}

