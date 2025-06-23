import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About"
import Rezervace from "../pages/Rezervace/Rezervace";
import Eshop from "../pages/Eshop/Eshop";
import Přihlášení from "../components/Přihlášení/Přihlášení";
import Registrace from "../components/Registrace/Registrace";
import Admin from "./Admin";

import Create from "./ItemsCreateForm";
import Clothing from "./ItemsList";
import Update from "./ItemsUpdateForm";
import ClothingView from "./ItemsView";
import Product from "./MainView";
import Products from "./MainList/index";
import CreatedClothing from "./ItemsCreateForm/CreatedItems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />            
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Eshop" element={<Eshop />} />
        <Route path="/Rezervace" element={<Rezervace />} />
        <Route path="/Přihlášení" element={<Přihlášení />} />
        <Route path="/Registrace" element={<Registrace />} />
        <Route path="/admin" element={<Admin />} />
          <Route path="/createitems" element={<Create />} />
          <Route path="/items" element={<Clothing />} />
          <Route path="/mindset" element={<MindsetList />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/view/:id" element={<ClothingView />} />
          <Route path="/created-item/:id" element={<CreatedClothing />} />
          <Route path="/item/:id" element={<Clothing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
