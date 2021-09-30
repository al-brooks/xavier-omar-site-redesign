import { React, useState } from 'react';

const Merch = () => {
  const [product, setProduct] = useState({
    name: 'if You Feel Sweatshirt',
    price: 50,
    productBy: 'Xavier Omar'
  });
  return (
    <div>
      <section>
        <div class="merchItem">
          <span>insert Merch Image</span>
          <div class="description">
            <span>Add increment and decrement quantity button</span>
            <h3>if You Feel Sweater</h3>
            <h5>$50</h5>
          </div>
        </div>
        <form action="http://localhost:8080/payment" method="POST">
          <input type="hidden" name="product_name" value={product.name} />
          <input
            type="hidden"
            name="product_price"
            value={product.price * 100}
          />
          <button type="submit">Checkout</button>
        </form>
      </section>
    </div>
  );
};

export default Merch;
