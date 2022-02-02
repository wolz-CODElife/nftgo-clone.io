import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index";
import Signin from "../pages/Signin";

const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default PagesRoutes;
