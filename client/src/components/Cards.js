import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { cards } from "./styles/Cards.module.css";
const Cards = (props) => {
  let { countries } = props;

  return (
    <div className={cards}>
      {Array.isArray(countries) &&
        countries.map((c, i) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/country/${c.alpha3Code}`}
            key={`link_${c.alpha3Code}`}
          >
            <Card
              className={"C" + i}
              name={c.name}
              flag={c.flag}
              region={c.region}
              key={c.alpha3Code}
            />
          </Link>
        ))}
    </div>
  );
};

export default Cards;
