import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/loader";
import { putHighest, clearHighest } from "../store/header/header.actions";
import { getHighestRated } from "../store/header/header.service";

export default function Header() {
  const dispatch = useDispatch();
  const topRated = useSelector(({ header }) => header.topRated);
  const movies = useSelector(({ movies }) => movies.data);
  const status = useSelector(({ movies }) => movies.status);
  const page = useSelector(({ movies }) => movies.page);

  useEffect(() => {
    if (status === "success") {
      dispatch(putHighest(getHighestRated(movies)));
    } else if (status === "failure") {
      dispatch(clearHighest());
    }
  }, [status]);

  if (status === "idle") {
    return <Loader />;
  }

  if (Object.keys(topRated).length)
    return (
      <div class="container">
        <div class="row g-3" id="stats-target">
          <div class="col-md-12">
            <div class="card p-1 rounded-0">
              <div class="card-body text-left">
                <h3>Stats</h3>
                <p>Current page: {page}</p>
                <p>Number of Movies: {movies.length}</p>
                <p>Top rated movie: {topRated.original_title}</p>
                <p>Rating: {topRated.vote_average}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
