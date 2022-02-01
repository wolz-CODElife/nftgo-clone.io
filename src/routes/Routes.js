import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index";

const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Index />} />
    </Routes>
  );
};

export default PagesRoutes;
