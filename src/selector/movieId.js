export const findMovie = (movies, id) => {
  const movie = movies.find((movie) => {
    return movie._id == id;
  });
  return movie;
};
