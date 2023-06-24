import React from "react";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/modal/modal.actions";

export default function Modal() {
  const dispatch = useDispatch();
  const movie = useSelector(({ modal }) => modal.movie);
  const shown = useSelector(({ modal }) => modal.shown);
  if (shown === true)
    return (
      <div className="my-modal bg-white">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header justify-content-end mb-2">
              <button
                type="button"
                className="close bg-dark text-light"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => dispatch(closeModal())}
              >
                <span aria-hidden="true"> × </span>
              </button>
            </div>

            <div className="modal-body d-flex align-items-start">
              <img
                className="img-fluid w-100 me-3"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="poster"
              />
              <div>
                <h3 className="my-modal-tite">{movie.original_title}</h3>
                <h3>
                  IMDB Rating: {movie.vote_average}/10 ({movie.vote_count}{" "}
                  Votes)
                </h3>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
