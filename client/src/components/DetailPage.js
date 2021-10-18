import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "./../actions/actions";
import { container, flags } from "./styles/DetailPage.module.css";

const DetailPage = () => {
  let { id: code } = useParams();
  let [id] = useState(code);
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  let {
    flag,
    name,
    alpha3Code: countryId,
    region,
    capital,
    subregion,
    area,
    population,
    activities,
  } = country;
  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);
  console.log(activities);
  return (
    <div className={container}>
      <div className={flags}>
        <img className={flags} src={flag} width="100%" alt="flag" />
      </div>
      <div>
        <p>Name: {name}</p>
        <p>Country code: {countryId}</p>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
        <p>Sub Region: {subregion}</p>
        <p>Area: {area} Km2</p>
        <p>Population: {population}</p>
      </div>

      <span>
        <h3>Activities:</h3>
        <ul>
          {activities && activities.length ? (
            activities.map((a) => (
              <li>
                {a.name} Duration: {a.duration} Difficulty: {a.dificulty}{" "}
              </li>
            ))
          ) : (
            <li>No hay actividades</li>
          )}
        </ul>
      </span>
    </div>
  );
};

export default DetailPage;
