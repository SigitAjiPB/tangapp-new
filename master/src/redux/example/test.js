// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addItem, removeItem } from './features/cart/cartSlice';

// const Cart = () => {
//   const cart = useSelector(state => state.cart);
//   const dispatch = useDispatch();

//   const handleAddItem = (item) => {
//     dispatch(addItem(item));
//   };

//   const handleRemoveItem = (item) => {
//     dispatch(removeItem(item));
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map(item => (
//           <li key={item.id}>
//             {item.name} - ${item.price}
//             <button onClick={() => handleRemoveItem(item)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => handleAddItem({ id: 1, name: 'Product 1', price: 100 })}>
//         Add Product 1
//       </button>
//     </div>
//   );
// };

// export default Cart;
