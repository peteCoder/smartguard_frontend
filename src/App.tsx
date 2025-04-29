// External Components
import { Routes, Route } from "react-router";

import "./App.css";

// Pages
import Home from '@/pages/Home';
import MainPagesLayout from "@/layouts/MainPagesLayout";
import About from "@/pages/About";
import Checker from "@/pages/Checker";

function App() {
  // .env - Environment variables
  // console.log(import.meta.env.VITE_SOME_KEY);

  return (
    <Routes>
      <Route element={<MainPagesLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checker-tool" element={<Checker />} />
      </Route>
    </Routes>
  )
}

export default App;
