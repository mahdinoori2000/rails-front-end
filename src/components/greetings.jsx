import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getGreetingsAsync } from '../redux/greetings/greetingSllice';
import './greetings.css';

const Greetings = () => {
  const { greeting, error, isLoading } = useSelector((store) => store.greetings);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetingsAsync());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="message-container">
        <h3>Greetings</h3>
        {isLoading && <h2 className="loading-message">Loading...</h2>}
        {error && <h2 className="error-message">{error}</h2>}
        {greeting && <h2 className="greeting-message">{greeting.message}</h2>}
      </div>
    </div>
  );
};

export default Greetings;
