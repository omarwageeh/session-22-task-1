export const getHighestRated = (movies) => {
  let topRated = movies[0];
  movies.forEach((movie) => {
    if (movie.vote_average > topRated.vote_average) topRated = movie;
  });
};
