// External Components
import { Routes, Route } from "react-router";

import "./App.css";

// Pages
import Home from '@/pages/Home';

function App() {
  // .env - Environment variables
  // console.log(import.meta.env.VITE_SOME_KEY);

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
