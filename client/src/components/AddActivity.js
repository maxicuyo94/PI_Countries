// import React, { useState } from 'react'
import React, { useState }  from 'react'

const AddActivity = () => {
    // let [countries,setCountries]=useState([])
    let [activity,setActivity]=useState({name:"",dificulty:"",duration:""})
    // let [season,setSeason]=useState([])
    const handleCheck = (e) => {
        console.log(e.target.checked)
    }
const handleChange=(e)=>{
    setActivity({...activity,dificulty:e.target.value})
}

    return (
        <div>
            <form>
                <div>
                    <label>Add Activity</label>
                </div>
                <label>
                    Name: <input type="text" name="name" />
                </label>
                <div>
                    <label>   Dificulty (1-5): <input type="range" min="1" max="5" step="1" onChange={e=>handleChange(e)}/> {activity.dificulty}</label>
                    <label>   Duration(days): <input type="number" name="name" /> </label>
                </div>
                <div>
                    <label>  Country: <input type="text" name="name" />  </label>
                </div>
                <label>Seasons:</label>
                <div>
                    <label>Winter <input type="checkbox" id="Winter" value="Winter" onClick={e => handleCheck(e)} /></label>
                    <label>Autumn <input type="checkbox" id="Autumn" value="Autumn" onClick={e => handleCheck(e)} /></label>
                    <br />
                    <label>Summer <input type="checkbox" id="Summer" value="Summer" onClick={e => handleCheck(e)} /></label>
                    <label>Spring <input type="checkbox" id="Spring" value="Spring" onClick={e => handleCheck(e)} /></label>
                </div>
                <input id="submit" type="submit" value="Add Activity" />
            </form>
        </div>
    )
}
export default AddActivity
