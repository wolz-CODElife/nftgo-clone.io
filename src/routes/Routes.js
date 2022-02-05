import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index";
import NFTDrops from "../pages/NFTDrops";
import Signin from "../pages/Signin";
import WhaleTrade from "../pages/WhaleTrade";

const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/nft-drops" element={<NFTDrops />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/whale-tracking">
        <Route path="trade" element={<WhaleTrade />} />
        <Route path="whale" element={<WhaleTrade />} />
      </Route>
    </Routes>
  );
};

export default PagesRoutes;
