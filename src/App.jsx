import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import { HomeRoutes, LoginRoutes } from "./utils/routes";
import { Home, Page1 } from "./pages/main";

import Layout from "./components/Layout";

function App() {
  return (
        <Layout/>
  );
}

export default App;
