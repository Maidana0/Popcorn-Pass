
export interface IHeaderMovieDetail {
    title: string,
    releaseDate: string,
    runtime?: string,
    vote_average?: number,
    vote_count?: number,
}

export interface IContentMovieDetail {
    genre: string[],
    description: string,
    image: string,

}

export interface IMovie extends IHeaderMovieDetail, IContentMovieDetail {
    id: string
}