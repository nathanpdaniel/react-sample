import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './AppValues.scss';

export const AppValues = ({ onBack, values: { sampleSize, sampleMean, standardDeviation, testHypothesis, hypothesizedMean }}) => (
  <div className="appValues">
    <div>
      <div className="label">Sample Size:</div>
      <div>{sampleSize}</div>
    </div>
    <div>
      <div className="label">Standard Mean:</div>
      <div>{sampleMean}</div>
    </div>
    <div>
      <div className="label">Standard Deviation:</div>
      <div>{standardDeviation}</div>
    </div>
    {testHypothesis &&
    <div>
      <div className="label">Hypothesized Mean</div>
      <div>{hypothesizedMean}</div>
    </div>
    }
    <div className={classnames('buttons')}>
      <button onClick={onBack}>Back</button>
    </div>
  </div>
);

AppValues.propTypes = {
  values: PropTypes.shape({
    sampleSize: PropTypes.number.isRequired,
    sampleMean: PropTypes.number.isRequired,
    standardDeviation: PropTypes.number.isRequired,
    testHypothesis: PropTypes.bool.isRequired,
    hypothesizedMean: PropTypes.number
  }),
  onBack: PropTypes.func.isRequired,
}
