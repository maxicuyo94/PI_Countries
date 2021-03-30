import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getByName } from '../actions/actions';
import Cards from './Cards';
import { topnav, input  ,select} from "./styles/HomePage.module.css";



const SearchPage = () => {
    let countriesPage = useSelector(state => state.countriesPage)
    var act = [];
    countriesPage.map(item => item.activities.length && item.activities.map(dato => dato.name && act.push(dato.name)));
    console.log (act)
    // act = act.filter((value, index, self) => { return value && self.indexOf(value) === index; })
    const [filtro, setfiltro] = useState({ name: "", region: "", activity: ""});
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getByName(filtro.name, filtro.region, filtro.activity))
    }, [dispatch, filtro])

    return (
        <div>
            <div className={topnav}>

                <input className={input} 
                    placeholder="Find Country"
                    type="text"
                    name="username"
                    onChange={(e) => setfiltro({ ...filtro, name: e.target.value })}
                    value={filtro.name}
                />

                <select className={select}  onChange={(e) => setfiltro({ ...filtro, region: e.target.value })} >
                    <option value="">REGION</option>
                    <option value="Europe">EUROPE</option>
                    <option value="Americas">AMERICAS</option>
                    <option value="Asia">ASIA</option>
                    <option value="Africa">AFRICA</option>
                    <option value="Oceania">OCEANIA</option>
                    <option value="Polar">POLAR</option>
                </select>
                <select className={select}  onChange={(e) => setfiltro({ ...filtro, activity: e.target.value })}>
                    <option>All</option>
                    {act.map((item, i) => <option key={i} value={item}>{item}</option>)}
                </select>
            </div>
            <Cards countries={countriesPage} />
        </div>
    )
}

export default SearchPage
