import React from 'react';

type Props = {
  order: Object
}

class ViewOrder extends React.Component {

  state = {
    orderCompleted: false
  }

  props: Props

  render() {
    return (
      <div className="waldo-pizza view-order">
        <h2>Order Total (${this.props.order.total.toFixed(2)})</h2>
        {this.state.orderCompleted && <div className="view-order__completed-message">Thanks for Ordering!</div>}
        {
          this.props.order.pizzas.map((pizza, idx) => {
            return (
              <div className="view-order__pizza-wrapper" key={idx}>

                <h3>{pizza.size} pizza (${pizza.cost.toFixed(2)})</h3>
                {
                  pizza.toppings.map(topping => {
                  return (
                      <div key={topping.name}>{topping.name}</div>
                    );
                  })
                }
                {!this.state.orderCompleted &&
                  <button onClick={() => { this.props.removePizza(idx); }} className="waldo-pizza__delete">delete this pizza</button>
                }
              </div>
            );
          })
        }
        {!this.state.orderCompleted &&
          <div className="waldo-pizza__options">
            <button onClick={() => {this.props.backToLanding(); }}>Back</button>
            <button onClick={() => { this.setState({orderCompleted: true}) }}>Complete Order</button>
          </div>
        }
      </div>
    );
  }
}

export default ViewOrder;
