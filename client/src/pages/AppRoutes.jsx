import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import ItemCreateForm from "./ItemCreateForm";
import ItemList from "./ItemList";
import ItemView from "./ItemView";
import MainView from "./MainView";
import MainList from "./MainList";
import ItemUpdateForm from "./ItemUpdateForm";
import Admin from "./Admin";
import Cas from "./Cas";
import About from "./About";
import Mista from "./Mista";
import Doprava from "./Doprava/index"
import Pratele from "./pratele/index"

import ReservationCreateForm from "./ReservationCreateForm/index";
import ReservationUpdateForm from "./ReservationUpdateForm/index";
import ReservationList from "./ReservationList/index";
import ReservationView from "./ReservationView/index";
import ResMainView from "./ResMainView/index";
import ResMainList from "./ResMainList/index"

export default function AppRoutes() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/cas" element={<Cas/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/mista" element={<Mista/>}/>

                <Route path="/add-item" element={<ItemCreateForm/>}/>
                <Route path="/view-item" element={<ItemList/>}/>
                <Route path="/item/:id" element={<ItemView/>}/>
                <Route path="/product/:id" element={<MainView/>}/>
                <Route path="/products" element={<MainList/>}/>    
                <Route path="/update-item/:id" element={<ItemUpdateForm/>}/>

                <Route path="/Doprava" element={<Doprava/>}/>
                <Route path="/Pratele" element={<Pratele/>}/>

                <Route path="/add-reservation" element={<ReservationCreateForm/>}/>
                <Route path="/reservation/:id" element={<ReservationView/>}/>
                <Route path="/view-reservation" element={<ReservationList/>}/>
                <Route path="/update-reservation/:id" element={<ReservationUpdateForm/>}/>
                <Route path="/rezervace" element={<ResMainList/>}/>
                <Route path="/rezervace/:id" element={<ResMainView/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
