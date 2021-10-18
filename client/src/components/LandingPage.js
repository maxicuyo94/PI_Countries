import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAll, getStart } from "../actions/actions";
import { rotate } from "./styles/LandingPage.module.css";
import { ReactComponent as World } from "./styles/world.svg";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStart());
    dispatch(getAll());
  }, [dispatch]);
  return (
    <div>
      <Link to="/home/1">
        <World width="38%" className={rotate} />
      </Link>
    </div>
  );
};

export default LandingPage;
