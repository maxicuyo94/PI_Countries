// import React, { useState } from 'react'
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  btn,
  container,
  checkmark,
  containerAdd,
  inputStyle,
  largeBtn,
  checkBox,
  range,
} from "./styles/AddActivity.module.css";

const AddActivity = () => {
  let [country, setCountry] = useState("");
  let [activity, setActivity] = useState({
    countries: [],
    name: "",
    dificulty: "1",
    duration: "",
  });
  let [season, setSeason] = useState([]);
  // const dispatch = useDispatch()

  let countriesList = useSelector((state) => state.countries);

  const handleCheck = (e) => {
    e.target.checked && setSeason([...season, e.target.value]);
    !e.target.checked &&
      setSeason([...season.filter((s) => s !== e.target.value)]);
  };
  const handleChange = (e) => {
    e.preventDefault();
    let nam = e.target.name;
    let val = e.target.value;
    setActivity({ ...activity, [nam]: val });
    console.log(countriesList);
  };
  let addCountry = (e) => {
    e.preventDefault();
    console.log(country);
    console.log(validateCountry(country));
    if (validateCountry(country)) {
      setActivity({ ...activity, countries: [...activity.countries, country] });
      setCountry("");
    } else {
      alert("not country");
    }
  };
  let delCountry = (e) => {
    e.preventDefault();
    setActivity({
      ...activity,
      countries: [...activity.countries.filter((c) => c !== e.target.name)],
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(activity);
    let { name, dificulty, duration } = activity;
    activity.countries.map((country) =>
      axios.post("http://localhost:3001/api/activity/country", {
        country,
        name,
        dificulty,
        duration,
      })
    );
    season.map((season) =>
      axios.post("http://localhost:3001/api/activity/season", {
        season,
        name,
        dificulty,
        duration,
      })
    );
    alert("Activity created");
  };

  let validateCountry = (a) => {
    console.log("hol", countriesList);
    return countriesList.some((c) => c.name === a);
  };
  return (
    <div className={containerAdd}>
      <form>
        <div>
          <h4>Add Activity</h4>
        </div>
        <label> Activity Name: </label>
        <br />
        <input
          className={inputStyle}
          type="text"
          name="name"
          onChange={handleChange}
        />
        <div>
          <label>Dificulty ({activity.dificulty}):</label>
          <br />
          <input
            className={inputStyle}
            id={range}
            type="range"
            min="1"
            max="5"
            step="1"
            name="dificulty"
            onChange={handleChange}
          />
          <br />
          <label>Duration(days): </label>
          <br />
          <input
            className={inputStyle}
            type="number"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Country:</label> <br />
          <input
            className={inputStyle}
            type="text"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
          />
          <button className={btn} onClick={addCountry}>
            +
          </button>
          <br />
          {Array.isArray(activity.countries) &&
            activity.countries.map((c) => (
              <label>
                {c}{" "}
                <button className={btn} name={c} onClick={delCountry}>
                  x
                </button>
              </label>
            ))}
        </div>
        <label>Seasons:</label>
        <div className={checkBox}>
          <label className={container}>
            Winter
            <input
              type="checkbox"
              id="Winter"
              value="Winter"
              onClick={handleCheck}
            />
            <span className={checkmark} />
          </label>
          <label className={container}>
            Autumn
            <input
              type="checkbox"
              id="Autumn"
              value="Autumn"
              onClick={handleCheck}
            />
            <span className={checkmark} />
          </label>
          <label className={container}>
            Summer
            <input
              type="checkbox"
              id="Summer"
              value="Summer"
              onClick={handleCheck}
            />
            <span className={checkmark} />
          </label>
          <label className={container}>
            Spring
            <input
              type="checkbox"
              id="Spring"
              value="Spring"
              onClick={handleCheck}
            />
            <span className={checkmark} />
          </label>
        </div>
        <button
          className={largeBtn}
          value="Add Activity"
          onClick={handleSubmit}
        >
          {" "}
          Add{" "}
        </button>
      </form>
    </div>
  );
};
export default AddActivity;
