import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, getByName } from '../actions/actions';
import Cards from './Cards';

const SearchPage = () => {
    const [filter, setFilter] = useState({name:"",region:"",activity:""});
    const dispatch = useDispatch()

    useEffect(() => {
         dispatch(getByName(filter.name,filter.region,filter.activity)) 
        }, [dispatch, filter])

    let countriesPage = useSelector(state => state.countriesPage)

    return (
        <div>
            <div>

                <input
                    placeholder="Find Country"
                    type="text"
                    name="username"
                    onChange={(e) => setFilter({...filter,name:e.target.value})}
                    value={filter.name}
                />

            <select  onChange={(e) => setFilter({...filter,region:e.target.value})} >
                <option value="">REGION</option>
                <option value="Europe">EUROPE</option>
                <option value="Americas">AMERICAS</option>
                <option value="Asia">ASIA</option>
                <option value="Africa">AFRICA</option>
                <option value="Oceania">OCEANIA</option>
                <option value="Polar">POLAR</option>
            </select>
            </div>
            <Cards countries={countriesPage} />
        </div>
    )
}

export default SearchPage
