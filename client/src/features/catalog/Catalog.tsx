import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

export default function Catalog(){

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list().then(products => setProducts(products))
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
