import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";

function App() {
  
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
    <div className="app">
      <h1 style={{color:'green'}}>Re-Store</h1>
      <Catalog></Catalog>
    </div>
  );
}

export default App;
