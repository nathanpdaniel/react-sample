import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { AppView } from '../AppView/AppView';

const mapStateToProps = (state) => {
  const selector = formValueSelector('appForm');
  return {
    performHypothesisTest: selector(state, 'testHypothesis')
  }
}

export default connect(mapStateToProps)(AppView);
