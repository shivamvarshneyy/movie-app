import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setPage } from "../actions/movieActions";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { loading, movies, error, currentPage, totalPages } = useSelector(
    (state) => state.moviesData
  );

  useEffect(() => {
    if (query) {
      dispatch(fetchMovies(query, currentPage));
    }
  }, [query, currentPage, dispatch]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const renderMovies = () => {
    return movies.map((movie) => (
      <div key={movie.id} className="movieItem">
        <img
          className="movieImg"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movieDetails">
          <h3 className="movieTitle truncate">{movie.title}</h3>
          <p className="movieText">{movie?.overview?.slice(0, 200)}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="movieSearchContainer">
      <input
        type="text"
        placeholder="Search for movies here..."
        value={query}
        onChange={handleSearchChange}
        className="searchBar"
      />
      {loading && (
        <div className="loadingSpinner">
          Loading please wait for a moment...
        </div>
      )}
      {error && <div className="errorMessage">{error}</div>}
      <div className="movieList">{renderMovies()}</div>
      {totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
