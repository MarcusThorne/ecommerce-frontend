import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

import { getProducts } from '../api/products'

function Products() {
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response.products)
    }

    fetchProducts()
  }, [])

  return (
    <section >
      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          {products && products.map((product, id) => (
            <Card key={id} name={product.name} price={product.price} description={product.description} id={product.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
