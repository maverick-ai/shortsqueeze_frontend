import React from "react";
import "./Rating.scss";
import { useState } from "react";

const initialState = {
  angry: false,
  sad: false,
  ok: false,
  good: true,
  happy: false,
};

function Rating(props) {
  const [ratingState, setRatingState] = useState(initialState);

  return (
    <React.Fragment>
      <ul className="feedback">
        <li
          onClick={(event) => {
            setRatingState((previous) => {
              return {
                sad: false,
                ok: false,
                good: false,
                happy: false,
                angry: !previous.angry,
              };
            });
          }}
          className={`angry ${ratingState.angry === true ? "active" : ""}`}
        >
          <div>
            <svg className="eye left">
              <use xlinkHref="#eye" />
            </svg>
            <svg className="eye right">
              <use xlinkHref="#eye" />
            </svg>
            <svg class="mouth">
              <use xlinkHref="#mouth" />
            </svg>
          </div>
        </li>
        <li
          onClick={(event) => {
            setRatingState((previous) => {
              return {
                sad: !previous.sad,
                ok: false,
                good: false,
                happy: false,
                angry: false,
              };
            });
          }}
          className={`sad ${ratingState.sad === true ? "active" : ""}`}
        >
          <div>
            <svg className="eye left">
              <use xlinkHref="#eye" />
            </svg>
            <svg className="eye right">
              <use xlinkHref="#eye" />
            </svg>
            <svg className="mouth">
              <use xlinkHref="#mouth" />
            </svg>
          </div>
        </li>
        <li
          onClick={(event) => {
            setRatingState((previous) => {
              return {
                sad: false,
                ok: !previous.ok,
                good: false,
                happy: false,
                angry: false,
              };
            });
          }}
          className={`ok ${ratingState.ok === true ? "active" : ""}`}
        >
          <div></div>
        </li>
        <li
          onClick={(event) => {
            setRatingState((previous) => {
              return {
                sad: false,
                ok: false,
                good: !previous.good,
                happy: false,
                angry: false,
              };
            });
          }}
          className={`good ${ratingState.good === true ? "active" : ""}`}
        >
          <div>
            <svg className="eye left">
              <use xlinkHref="#eye" />
            </svg>
            <svg className="eye right">
              <use xlinkHref="#eye" />
            </svg>
            <svg className="mouth">
              <use xlinkHref="#mouth" />
            </svg>
          </div>
        </li>
        <li
          onClick={(event) => {
            setRatingState((previous) => {
              return {
                sad: false,
                ok: false,
                good: false,
                happy: !previous.happy,
                angry: false,
              };
            });
          }}
          className={`happy ${ratingState.happy === true ? "active" : ""}`}
        >
          <div>
            <svg className="eye left">
              <use xlinkHref="#eye" />
            </svg>
            <svg className="eye right">
              <use xlinkHref="#eye" />
            </svg>
          </div>
        </li>
      </ul>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 4" id="eye">
          <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 7"
          id="mouth"
        >
          <path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5"></path>
        </symbol>
      </svg>
    </React.Fragment>
  );
}

export default Rating;
