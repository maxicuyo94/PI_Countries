// import React, { useState } from 'react'
import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';



const AddActivity = () => {
    let [country, setCountry] = useState("")
    let [activity, setActivity] = useState({ countries: [], name: "", dificulty: "1", duration: "" })
    // let [season, setSeason] = useState([])
    // const dispatch = useDispatch()


    let countriesList = useSelector(state => state.countries)

    // const handleCheck = (e) => {
    //     console.log(e.target.checked)

    // }
    const handleChange = (e) => {
        e.preventDefault();
        let nam = e.target.name
        let val = e.target.value
        setActivity({ ...activity, [nam]: val })
        console.log(countriesList)
    }
    let addCountry = (e) => {
        e.preventDefault();
        console.log(country)
        console.log(validateCountry(country))
        if (validateCountry(country)) {
            setActivity({ ...activity, countries: [...activity.countries, country] })
            setCountry("")
        } else {
            alert("not country")
        }
    }
    let delCountry = e => {
        e.preventDefault()
        setActivity({ ...activity, countries: [...activity.countries.filter(c => c !== e.target.name)] })
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(activity)
        let { name, dificulty, duration } = activity
        activity.countries.map(country =>
            axios.post('http://localhost:3001/api/activity/country',
                { country, name, dificulty, duration })
        )
    }
    let validateCountry = (a) => {
        console.log("hol", countriesList)
        return countriesList.some(c => c.name === a)
    }
    return (
        <div>
            <form>
                <div>
                    <label>Add Activity</label>
                </div>
                <label>
                    Name: <input type="text" name="name" onChange={handleChange} />
                </label>
                <div>
                    <label>   Dificulty ({activity.dificulty}): <input type="range" min="1" max="5" step="1" name="dificulty" onChange={handleChange} /> </label>
                    <label>   Duration(days): <input type="number" name="duration" onChange={handleChange} /> </label>
                </div>
                <div>
                    <label>  Country:<input type="text" name="country" onChange={e => setCountry(e.target.value)} /><button onClick={addCountry}>+</button>
                    </label>
                    {Array.isArray(activity.countries) && activity.countries.map(c => <label>{c} <button name={c} onClick={delCountry}>x</button></label>)}
                </div>
                <label>Seasons:</label>
                <div>
                    <label>Winter <input type="checkbox" id="Winter" value="Winter" /></label>
                    <label>Autumn <input type="checkbox" id="Autumn" value="Autumn" /></label>
                    <br />
                    <label>Summer <input type="checkbox" id="Summer" value="Summer" /></label>
                    <label>Spring <input type="checkbox" id="Spring" value="Spring" /></label>
                </div>
                <button value="Add Activity" onClick={handleSubmit} > Add </button>

            </form>
        </div>
    )
}
export default AddActivity
