import {connect} from 'react-redux';
import actions from '@@redux/actions';
import ViewOrder from './component';
//
//
const mapStateToProps = state => (
  {
    order: state.default.order
  }
);
//
const mapDispatchToProps = dispatch => (
  {
    removePizza: (pizzaIndex) => { dispatch(actions.waldoActions.removePizza({pizzaIndex})); }
  }
);
//
export default connect(mapStateToProps, mapDispatchToProps)(ViewOrder);
