import React from "react";
import Header from "./componentes/header";
import ProductoLista from "./componentes/productos/index";
import './index.css';
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductoLista/>

    </div>
  );
}

export default App;
