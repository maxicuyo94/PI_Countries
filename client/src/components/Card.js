import React from 'react'
import { card, container, img, imgContainer, text } from "./styles/Card.module.css"

const Card = (props) => {
    let { flag, name, region } = props
    return (
        <div className={card}>
            <div className={imgContainer}>
                <img className={img} src={flag} alt="flag" />
            </div>
            <div className={container} >
                <p className={text}><h4 className={text}>{name}</h4></p>
                <p className={text}>{region}</p>
            </div>
        </div>
    )
}

export default Card
