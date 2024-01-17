import React from "react";
import Index from "./pages/Index";
import Ligue from "./pages/Ligue";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ligue" element={<Ligue />} />
      </Routes>
    </Router>
  );
}

export default App;
