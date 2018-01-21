import React from 'react';

type Props = {
  pizzaSizes: Array,
  toppings: Array
}

class OrderForm extends React.Component {

  state = {
    pizza: {
      size: null,
      toppings: [],
      cost: 0
    },
    mode: 'size'
  }

  handleChange = (e, topping) => {
    const toppings = this.state.pizza.toppings;
    const indexOfTopping = toppings.indexOf(topping);
    const maxToppings = this.props.pizzaSizes[this.state.pizza.size].maxToppings;

    if(indexOfTopping > -1) {
      toppings.splice(indexOfTopping, 1);
      this.setState({pizza: {...this.state.pizza, ...{toppings: toppings}, ...{cost: this.state.pizza.cost - topping.price}}});
    } else if(toppings.length < maxToppings || !maxToppings){
      toppings.push(topping);
      this.setState({pizza: {...this.state.pizza, ...{toppings: toppings}, ...{cost: this.state.pizza.cost + topping.price}}});
    } else {
      console.warn('too many toppings', toppings.length < maxToppings)
      e.target.checked = false;
    }

  }

  render() {
    return (
      <div className="waldo-pizza order-form">
         <h2>Pizza Total (${this.state.pizza.cost.toFixed(2)})</h2>
         {this.state.mode === 'size' && <div>Please select a pizza size</div>}
         {this.state.mode === 'size' &&
           Object.keys(this.props.pizzaSizes).map(pizzaSizeKey => {
             const pizzaSize = this.props.pizzaSizes[pizzaSizeKey];
             return (
               <div
                  className="waldo-pizza__list-options"
                  onClick={() => { this.setState({pizza: {...this.state.pizza, ...{size: pizzaSize.name, cost: this.state.pizza.cost + pizzaSize.basePrice}}, mode: 'toppings'})} }
                  key={pizzaSize.name}>
                  {pizzaSize.name}
               </div>
             );
           })
         }

         {this.state.mode === 'toppings' && <div>Please choose your toppings (limit: {this.props.pizzaSizes[this.state.pizza.size].maxToppings}) </div>}
         {this.state.mode === 'toppings' &&
           this.props.pizzaSizes[this.state.pizza.size].toppings.map(topping => (
             <div className="waldo-pizza__list-options" key={topping.topping.name}>
              <span>${topping.topping.price.toFixed(2)}</span>
              <span>{topping.topping.name}</span>
              <input onChange={(e) => {this.handleChange(e, topping.topping)}} type="checkbox" />
             </div>
           ))
         }
         <div className="waldo-pizza__options">
           {this.state.mode === 'toppings' &&
              <button onClick={() => {this.props.addPizza(this.state.pizza); this.props.backToLanding(); }}>Add to Order</button>}
            <button onClick={() => {this.props.backToLanding(); }}>Cancel Pizza</button>
          </div>
      </div>
    );
  }
}

export default OrderForm;
