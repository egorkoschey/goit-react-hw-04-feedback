import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ state }) => {
  const countTotal = state.good + state.neutral + state.bad;
  const positiveFeedback = ((state.good / countTotal) * 100).toFixed(1);

  return (
    <>
      <h3 className={s.titleStat}>Statistics</h3>
      {!countTotal ? (
        <p className={s.notiStat}>No feedback given</p>
      ) : (
        <ul className={s.listTeam}>
          <li className={s.itemsStat}>Good: {state.good}</li>
          <li className={s.itemsStat}>Neutral: {state.neutral}</li>
          <li className={s.itemsStat}>Bad: {state.bad}</li>
          <li className={s.itemsStat}>Total: {countTotal}</li>
          <li className={s.itemsStat}>
            Positive feedback: {positiveFeedback}%
          </li>
        </ul>
      )}
    </>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistics;