import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import Playlist from "./pages/Playlist";
import { Route, Routes } from "react-router-dom";
import Revenue from "./pages/Revenue";

function App() {
  return (
    <Routes>
      <Route path="playlist-manager" element={<Playlist />} />
      <Route path="revenue" element={<Revenue />} />
    </Routes>
  );
}

export default App;
