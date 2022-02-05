import React from 'react';
import { WhaleTradeHeaderContainer } from './styles/WhaleTrackingHeaderStyles';
import { IconInfo } from '../assets/icons/icons';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

const WhaleTrackingHeader = () => {
    const routeName = document.location.pathname.split("/")[2]
    
    const routes = [
        {
            title: "Trade",
            route: "trade"
        },
        {
            title: "Mint",
            route: "mint",
            new: true,
        },
        {
            title: "Activity",
            route: "activity",
        },
        {
            title: "Whale",
            route: "whale",
        }
    ]
  return (
        <WhaleTradeHeaderContainer>
            <h1>Whale Tracking</h1>
            <p>🐋 <span>1,099</span> whales hold NFTs worth <span>$5.78B</span>, occupying <span>36.61%</span> of the global market cap of <span>$15.78B</span>.<Tooltip title="Who are whales? The addresses with $1,000,000+ NFT holding value of all collections." arrow placement='top'><span><IconInfo /></span></Tooltip> 
            <Link to="/whale-tracking/whale">Whale List</Link></p>
            <div className="subheader">
                {routes.map((route) => (
                    <Link key={route.title} to={`/whale-tracking/${route.route}`} className={routeName === route.route? "active" : ""}>{route.title} {route.new && <span>New!</span>}</Link>
                ))}
            </div>
        </WhaleTradeHeaderContainer>
  );
};

export default WhaleTrackingHeader;
