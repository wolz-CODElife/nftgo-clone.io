import React from 'react';
import { AllWhalesPage } from './styles/AllWhalesStyle';
import WhaleTrackingHeader from '../components/WhaleTrackingHeader';
import AllWhalesTable from '../components/AllWhalesTable';

const AllWhales = () => {
  return (
        <>
            <AllWhalesPage>
                <WhaleTrackingHeader />
                <AllWhalesTable />
            </AllWhalesPage>
        </>
  );
};

export default AllWhales;
