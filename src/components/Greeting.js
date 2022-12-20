import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGreetings } from '../redux/greeting/greetingReducer';

function Greeting() {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);
  return (
    <div className="container py-5 g-3">
      <Link to="/" className="btn-primary btn">
        <i className="fa fa-arrow-left" aria-hidden="true" />
      </Link>

      <h2 className="mt-3">{greetings}</h2>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          dispatch(fetchGreetings());
        }}
      >
        Show Greeting
      </button>
    </div>
  );
}

export default Greeting;
