import React from 'react';
import AppForm from '../AppForm/AppForm';
import { AppValues } from '../AppValues/AppValues';

export class AppView extends React.Component {
  state = {
    valuesSubmitted: false,
    values: null,
  }

  handleSubmit = (values) => {
    // convert values to numeric.  Typically, we'd be sending to an API
    const convertedValues = {
      sampleSize: Number(values.sampleSize),
      sampleMean: Number(values.sampleMean),
      standardDeviation: Number(values.standardDeviation),
      testHypothesis: values.testHypothesis || false,
      hypothesizedMean: values.hypothesizedMean ? Number(values.hypothesizedMean) : null
    }

    this.setState({ valuesSubmitted: true, values: convertedValues })  
  }

  handleBack = () => {
    this.setState({ valuesSubmitted: false, values: null });
  }

  render() {
    const { valuesSubmitted, values } = this.state;

    if (valuesSubmitted) {
      return <AppValues values={values} onBack={this.handleBack} />
    }

    return <AppForm onSubmit={this.handleSubmit} {...this.props}></AppForm>
  }
}