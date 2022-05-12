import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

export default function Catalog(){

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(responses => responses.json())
    .then(data => setProducts(data))
  },[])

function addProducts() {
  setProducts(prevState => [...prevState,
    {
      id: prevState.length + 101,
      name: 'Alya P.A ' ,
      price: (prevState.length * 100) + 100,
      brand: 'Erigo',
      description: 'Jaket anak muda',
      pictureUrl: 'http://picsum.photos/200'
    }])
}

  return (
    <>
      <ProductList products={products}/>
      <Button variant="contained" onClick={addProducts}>Tambah Data</Button>
    </>
  )
}
