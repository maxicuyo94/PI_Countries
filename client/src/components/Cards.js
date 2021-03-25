import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';

const Cards = (props) => {
    let{countries}=props

    return (
        <div className="CardsContainer">
            {Array.isArray(countries) && countries.map((c, i) => (
                <Link to={`/country/${c.alpha3Code}`} key={`link_${c.alpha3Code}`}>
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
    )
}

export default Cards
