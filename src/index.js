import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Navbar from "./Component/navbar";
import About from "./Pages/about";
import Blog from "./Pages/blog";
import Contact from "./Pages/contact";
import Homepage from "./Pages/homepage";
import Projects from "./Pages/project";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
