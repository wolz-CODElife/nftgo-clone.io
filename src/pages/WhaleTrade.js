import React from 'react';
import { WhaleTradePage } from './styles/WhaleTradeStyle';
import WhaleTrackingHeader from '../components/WhaleTrackingHeader';
import MostWhalesInvolved from '../components/MostWhalesInvolved';
import WhalesBought from '../components/WhalesBought';
import TopBuyers from '../components/TopBuyers';

const WhaleTrade = () => {
  return (
        <>
            <WhaleTradePage>
                <WhaleTrackingHeader />
                <MostWhalesInvolved />
                <WhalesBought />
                <div className="columns">
                  <TopBuyers />
                  <TopBuyers />
                </div>
            </WhaleTradePage>
        </>
  );
};

export default WhaleTrade;
