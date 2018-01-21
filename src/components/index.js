import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '@@redux/reducers';
import App from './component';

const render = (initialState) => {
  const store = createStore(combineReducers(reducers), initialState, applyMiddleware(thunk));
  window.__store__ = store;

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
   document.getElementById('root'));
};

axios.post('https://core-graphql.dev.waldo.photos/pizza', {
 query: `
 {
   pizzaSizes {
     name
     maxToppings
     basePrice
     toppings {
       topping {
         name
         price
       }
     }
   }
 }
 `
})
.then((response) => {
  const pizzaSizesArray = response.data.data.pizzaSizes;
  const pizzaSizes = {};
  pizzaSizesArray.forEach(pizzaSize => {
    pizzaSizes[pizzaSize.name] = pizzaSize;
  });

  render({default: {waldo: {
    pizzaSizes
  }}});
})
.catch((err) => {
  throw new Error(err);
});
