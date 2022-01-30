import { Routes, Route } from "react-router-dom"

const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<div>Hello</div>} />
    </Routes>
  );
};

export default PagesRoutes;
