import React from 'react';
import { IconInfo } from '../assets/icons/icons';
import Tooltip from '@mui/material/Tooltip';
import { WhaleTrackingPage } from './styles/WhaleTrackingStyle';

const WhaleTracking = () => {
  return (
        <>
            <WhaleTrackingPage>
                <div className="header">
                    <h1>Whale Tracking</h1>
                    <p>🐋 <span>1,099</span> whales hold NFTs worth <span>$5.78B</span>, occupying <span>36.61%</span> of the global market cap of <span>$15.78B</span>.<Tooltip title="Who are whales? The addresses with $1,000,000+ NFT holding value of all collections." arrow placement='top'><IconInfo /></Tooltip></p>
                </div>
                
            </WhaleTrackingPage>
        </>
  );
};

export default WhaleTracking;
