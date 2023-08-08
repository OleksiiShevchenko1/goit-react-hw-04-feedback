import React from 'react';
import { StyledScoreResults } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StyledScoreResults>
        <h1>{title}</h1>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total()}</p>
        <p>Positive feedback: {positivePercentage()} %</p>
      </StyledScoreResults>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
