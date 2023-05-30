import React from 'react';
import '../../css/Orders.css';

function Orders() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  return (
    <div>
      <h1>Orders</h1>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>{order}</li>
          ))}
        </ul>
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
}

export default Orders;