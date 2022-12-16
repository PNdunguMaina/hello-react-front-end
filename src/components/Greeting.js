import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/greeting/greetingSlice';

function Greeting() {
  const greeting = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);
  return (
    <div>
      <h2>Heading</h2>
      <h1>{greeting}</h1>
    </div>
  );
}

export default Greeting;
