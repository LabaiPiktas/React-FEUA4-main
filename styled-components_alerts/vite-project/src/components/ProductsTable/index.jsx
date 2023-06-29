import React, { useState, useEffect } from 'react';
import Table from '../Table';
import TableRowRemove from '../Table/feature/TableRowRemove';

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await (
          await fetch('https://fakestoreapi.com/products')
        ).json();

        setProducts(data);
      } catch (error) {
        setError('Error...');
      }

      setLoading(false);
    })();
  }, []);

  const mappedProducts = products.map((x) => ({
    id: x.id,
    title: x.title,
    price: x.price,
    category: x.category,
    rating: x.rating.rate,
  }));

  if (loading) {
    <p>Loading...</p>;
  }

  if (error) {
    <p>{error}</p>;
  }

  return (
    <TableRowRemove
      render={(removeRow) => (
        <Table data={mappedProducts} rowClickAction={removeRow} />
      )}
    />
  );
};

export default ProductsTable;
