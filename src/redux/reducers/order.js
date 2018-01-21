export default (state = {
  total: 0,
  pizzas: []
}, action) => {
  switch (action.type) {
    case 'ADD_PIZZA':{
      let order = state;
      order.total += action.payload.pizza.cost;
      order.pizzas.push(action.payload.pizza);

      order = {...state, ...order};
      return {...order, ...{}};
    }
    case 'REMOVE_PIZZA':{
      const pizzaTotal = state.pizzas[action.payload.pizzaIndex].cost;

      let order = state;
      order.pizzas = [...order.pizzas.slice(0, action.payload.pizzaIndex), ...order.pizzas.slice(action.payload.pizzaIndex + 1)];
      order.total -= pizzaTotal;

      return {...order, ...{}};
    }
    default:
      return state;
  }
};
