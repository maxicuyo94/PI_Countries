import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getStart } from '../actions/actions';

const LandingPage = () => {
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getStart())
    }, [dispatch]) 

    return (
        <div>
            <Link  to="/home/1">
                   <button>start</button> 
            </Link>
        </div>
    )
}

export default LandingPage