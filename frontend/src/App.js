import React from "react";
import BukuList from "./components/BukuList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBuku from "./components/AddBuku";
import EditBuku from "./components/EditBuku";


function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<BukuList />} />
          <Route path="/add" element={<AddBuku />} />
          <Route path="/edit/:id" element={<EditBuku />} />
        </Routes>
      </div >
    </BrowserRouter>
  );
}

export default App;
