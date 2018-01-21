import React from 'react';
import OrderForm from '@@modules/OrderForm';
import ViewOrder from '@@modules/ViewOrder';

class WaldoPizza extends React.Component {

  state = {
    mode: 'landing'
  }

  render() {
    return (
      <div className="waldo-pizza">
        <h1>Welcome to Waldo Pizza</h1>
        {this.state.mode === 'landing' &&
          <div className="waldo-pizza__options">
            <button onClick={() => { this.setState({mode: 'ordering'})}}>Buy Pizza</button>
            <button onClick={() => { this.setState({mode: 'viewing order'})}}>View Order</button>
          </div>
        }
        {this.state.mode === 'ordering' &&
          <OrderForm backToLanding={() => {this.setState({mode: 'landing'})}}/>
        }
        {this.state.mode === 'viewing order' &&
          <ViewOrder backToLanding={() => {this.setState({mode: 'landing'})}}/>
        }
      </div>
    );
  }
}

export default WaldoPizza;
