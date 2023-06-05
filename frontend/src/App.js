import React from "react";
import BukuList from "./components/BukuList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBuku from "./components/Buku/AddBuku";
import EditBuku from "./components/Buku/EditBuku";
import Navbar from "./components/layout/Navbar";
import KategoriList from "./components/Kategori/KategoriList";
import AddKate from "./components/Kategori/AddKate";
import EditKate from "./components/Kategori/EditKate";



function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<BukuList />} />
          <Route path="/add" element={<AddBuku />} />
          <Route path="/edit/:id" element={<EditBuku />} />
          <Route path="/kategori" element={<KategoriList />} />
          <Route path="/addKate" element={<AddKate />} />
          <Route path="/editKate/:id" element={<EditKate />} />
        </Routes>
      </div >
    </BrowserRouter>
  );
}

export default App;
