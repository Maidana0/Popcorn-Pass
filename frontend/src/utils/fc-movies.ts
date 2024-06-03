export const filteredListComingSoon = (res: Array<any>) => res.filter(movie =>
    movie.genre.length > 0 &&
    movie.image &&
    new Date(movie.releaseDate) > new Date()
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
    movie.genre.length > 0 &&
    movie.image &&
    new Date(movie.releaseDate) < new Date()
);