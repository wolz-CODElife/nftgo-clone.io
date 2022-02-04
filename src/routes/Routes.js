import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index";
import NFTDrops from "../pages/NFTDrops";
import Signin from "../pages/Signin";
import WhaleTracking from "../pages/WhaleTracking";

const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/nft-drops" element={<NFTDrops />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/whale-tracking">
        <Route path="trade" element={<WhaleTracking />} />
      </Route>
    </Routes>
  );
};

export default PagesRoutes;
