import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  nextPage,
  prevPage,
} from "../store/movies/movies.actions";
import { openModal } from "../store/modal/modal.actions";
import Loader from "../shared/loader";

export default function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.data);
  const status = useSelector(({ movies }) => movies.status);
  const page = useSelector(({ movies }) => movies.page);
  const errorMessage = useSelector(({ movies }) => movies.errorMessage);

  useEffect(() => {
    dispatch(fetchMovies);
  }, [page]);

  if (errorMessage) return errorMessage;

  if (status === "idle") return <Loader />;

  if (movies?.length !== 0) {
    return (
      <div className="container mt-4">
        <div className="padding">
          <div className="row g-4 justify-content-center" id="movies-target">
            {movies.map((movie, i) => {
              return (
                <div className="col-md-3" key={i}>
                  <div
                    className="card rounded-0 h-100 movie"
                    onClick={() => dispatch(openModal(movie))}
                  >
                    <div className="card-img-top">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="card-body text-center d-flex flex-column justify-content-between">
                      <h5>{movie.original_title}</h5>
                      <p>{movie.vote_average}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="col-md-4 text-center">
              <button
                onClick={() => {
                  if (page !== 1) dispatch(prevPage());
                }}
              >
                prev
              </button>
              <button onClick={() => dispatch(nextPage())}>next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
