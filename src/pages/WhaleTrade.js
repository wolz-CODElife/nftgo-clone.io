import React from 'react';
import { WhaleTradePage } from './styles/WhaleTradeStyle';
import WhaleTrackingHeader from '../components/WhaleTrackingHeader';
import AcccessibleTable from '../components/AcccessibleTable';

const WhaleTrade = () => {
  return (
        <>
            <WhaleTradePage>
                <WhaleTrackingHeader />
                <AcccessibleTable />
            </WhaleTradePage>
        </>
  );
};

export default WhaleTrade;
