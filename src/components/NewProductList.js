import React from 'react';
import NewProductItem from './NewProductItem';

export default function NewProductList({ products = [] } = {}) {
  return (
    <React.Fragment>
      <section className="new-products" id="new-product">
        <div className="rows">
          <h2>New Arrivals</h2>
        </div>
        <div className="rows">
          <div className="new-products-list">
            {products.map(product => (
              <NewProductItem key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
