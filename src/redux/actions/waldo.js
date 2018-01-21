export const ADD_PIZZA = 'ADD_PIZZA';
export const REMOVE_PIZZA = 'REMOVE_PIZZA';

export const addPizza = ({pizza}) => {
  return {type: ADD_PIZZA, payload: {pizza}}
};

export const removePizza = ({pizzaIndex}) => {
  return {type: REMOVE_PIZZA, payload: {pizzaIndex}}
};

export default {
  addPizza,
  removePizza
};
