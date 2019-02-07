import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import { mustBeWholeNumber, mustBeGreaterThan, mustBeNumeric } from '../../utils/validators';
import './AppForm.scss';

const mustBeGreaterThan2 = mustBeGreaterThan(2);

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    <input className={classnames({ error: touched && error })} {...input} placeholder={label} type={type} />
  </div>
)

export const AppForm = (props) => (
  <form className={classnames('appForm')} onSubmit={props.handleSubmit}>
    <div>
      <label>Sample Size:</label>
      <div>
        <Field
          name="sampleSize"
          component={renderField}
          type="text"
          placeholder="Sample Size"
          validate={[mustBeNumeric, mustBeWholeNumber, mustBeGreaterThan2]}
        />
      </div>
    </div>
    <div>
      <label>Sample Mean:</label>
      <div>
        <Field
          name="sampleMean"
          component={renderField}
          type="text"
          placeholder="Sample Mean"
          validate={[mustBeNumeric]}
        />
      </div>
    </div>
    <div>
      <label>Standard Deviation:</label>
      <div>
        <Field
          name="standardDeviation"
          component={renderField}
          type="text"
          placeholder="Standard Deviation"
          validate={[mustBeNumeric]}
        />
      </div>
    </div>
    <div>
      <div className={classnames('checkbox')}>
        <Field name="testHypothesis" component="input" type="checkbox" />
        <label htmlFor="testHypothesis">Perform Hypothesis Test</label>
      </div>
    </div>
    <div className={classnames({ variable: true, disabled: !props.performHypothesisTest })}>
      <label>Hypothesized Mean:</label>
      <div>
        <Field
          name="hypothesizedMean"
          component={renderField}
          type="text"
          placeholder="Hypothesized Mean"
          disabled={props.performHypothesisTest}
          validate={[mustBeNumeric]}
        />
      </div>
    </div>
    <div className={classnames('buttons')}>
      <button type="submit" disabled={props.submitting}>Ok</button>
      <button type="reset" disabled={props.submitting} onClick={props.reset}>Reset</button>
    </div>
  </form>
);

export default reduxForm({
  form: 'appForm'
})(AppForm);