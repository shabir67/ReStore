import React, { Fragment } from 'react'

export default function Catalog(){
  return (
    <Fragment>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
      <button onClick={addProducts}>Tambah Data</button>
    </Fragment>
  )
}
