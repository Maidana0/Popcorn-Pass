export const filteredListComingSoon = (res: Array<any>) => res.filter(movie =>
    (movie.genre?.length ?? movie.genre_ids.length) > 0 &&
    movie.overview?.length > 0 &&
    (movie.image ?? movie.poster_path) &&
    new Date(movie.releaseDate ?? movie.release_date) >= new Date()
);

export const convertGenre = (genreArray: Array<string>) => {
    const toString = genreArray.join(", ").toLowerCase()
    return toString.includes("_") ? toString.replace("_", " ") : toString
}

export const convertImagePath = (description: string, imagePath: string) => {
    const onlyPath = description.split("_face");
    return onlyPath[0] + "_face" + imagePath;
};


export const filteredListPlayingNow = (res: Array<any>) => res.filter(movie =>
    (movie.genre?.length ?? movie.genre_ids.length) > 0 &&
    (movie.image ?? movie.poster_path) &&
    new Date(movie.releaseDate ?? movie.release_date) <= new Date()
);