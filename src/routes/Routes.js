import { Routes, Route } from "react-router-dom"
import AllWhales from "../pages/AllWhales";
import Index from "../pages/Index";
import NFTDrops from "../pages/NFTDrops";
import RankCollection from "../pages/RankCollection";
import RankMint from "../pages/RankMint";
import RankNew from "../pages/RankNew";
import RankNFT from "../pages/RankNFT";
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
        <Route path="whale" element={<AllWhales />} />
      </Route>
      <Route path="/rank">
        <Route path="collection" element={<RankCollection />} />
        <Route path="asset" element={<RankNFT />} />
        <Route path="mint" element={<RankMint />} />
        <Route path="new" element={<RankNew />} />
      </Route>
    </Routes>
  );
};

export default PagesRoutes;
