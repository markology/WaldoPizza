import {connect} from 'react-redux';
import actions from '@@redux/actions';
import Landing from './component';
//
//
const mapStateToProps = state => (
  {
    pizzaSizes: state.default.waldo.pizzaSizes
  }
);
//
const mapDispatchToProps = dispatch => (
  {
    addPizza: (pizza) => { dispatch(actions.waldoActions.addPizza({pizza})); }
  }
);
//
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
