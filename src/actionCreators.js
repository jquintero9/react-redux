import axios from 'axios';

const loadProducts = () => {
  return dispatch => {
    axios.get('http://localhost:3003/products')
      .then(response => {
        dispatch({
          type: 'REPLACE_PRODUCTS',
          products: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    product
  };
};

const removeFromShoppingCart = product => {
  return {
    type: 'REMOVE_FROM_SHOPPING_CART',
    id: product.id
  };
}

export { loadProducts, addToCart, removeFromShoppingCart };