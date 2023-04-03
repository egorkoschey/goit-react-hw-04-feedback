import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Statistics from 'components/Statistics';
import s from './Feedback.module.css';

const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleOnClick = e => {
    const name = e.target.name;
    setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  return (
    <>
      <h3 className={s.title}>Please leave feedback</h3>
      <div onClick={handleOnClick} className={s.btnTeam}>
        <button type="button" name="good" className={s.btn}>
          Good
        </button>
        <button type="button" name="neutral" className={s.btn}>
          Neutral
        </button>
        <button type="button" name="bad" className={s.btn}>
          Bad
        </button>
      </div>
      <Statistics state={state} />
    </>
  );
};

Feedback.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Feedback;