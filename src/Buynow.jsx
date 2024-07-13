import React from 'react';

function Buynow() {
  return (
    <div className='now'>
      <div className="container">
        <h2>Online Order Booking Form</h2>
        <form action="#" method="POST">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="address">Shipping Address:</label>
          <textarea id="address" name="address" rows="4" required></textarea>

          <label htmlFor="product">Product:</label>
          <select id="product" name="product" required>
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
          </select>

          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" required />

          <label htmlFor="comments">Additional Comments:</label>
          <textarea id="comments" name="comments" rows="4"></textarea>

          <button type="submit">Submit Order</button>
        </form>
      </div>
    </div>
  );
}

export default Buynow;












//  import React from 'react'
 
//  function Buynow() {
//    return (
//      <div>
      
//      </div>
//    )
//  }
 
//  export default Buynow