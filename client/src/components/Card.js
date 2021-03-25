import React from 'react'

const Card = (props) => {
    let{flag,name,region} =props
    return (
        <div >
        <div className="Flag">
            <img src={flag} width="18%" alt="flag" />
        </div>
        <div className="Name">
            <h5> {name} </h5>
        </div>
        <div className="Region">
            <h6> {region} </h6>
        </div>
    </div>
    )
}

export default Card
