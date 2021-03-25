import React, { useEffect, useState } from 'react'
import { AutoSuggest } from 'react-autosuggestions';
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../actions/actions';
import Cards from './Cards';

const SearchPage = () => {
    const [countryPage, setCountryPage] = useState();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])
    let countries = useSelector(state => state.countries)
    const returnedArray = Array.from(countries)
    let countriesName = returnedArray.map(c=>c.name)
 console.log (countriesName)
    return (
        <div>
            <AutoSuggest
                name="Country"
                options={countriesName}
                handleChange={setCountryPage}
                value={countryPage}
            />
            <Cards countries={countryPage} />
        </div>
    )
}

export default SearchPage
