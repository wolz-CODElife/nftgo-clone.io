import React, { useState, forwardRef } from 'react';
import { IconDatePicker, IconGreaterThan, IconLessThan, IconShare, IconSubmit } from '../assets/icons/icons';
import { DatePickerBtn, NFTDropsPage } from './styles/NFTDropsStyles';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { nftDropsList } from '../assets/data/nftDropsList';
import NFTDropsCard from '../components/NFTDropsCard';

const NFTDrops = () => {
    const [dateFilter, setDateFilter] = useState(new Date())
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <DatePickerBtn onClick={onClick}>
            From 
            <span className='date_picker_nav'><IconLessThan /></span> 
            <span className='date_picker'>
                {value} <IconDatePicker />
            </span> 
            <span className='date_picker_nav'><IconGreaterThan /></span>
        </DatePickerBtn>
    ));

  return (
      <>
        <NFTDropsPage>
            <p className='note'>*DISCLAIMER:All information is provided merely for informational purposes. NFTGo does not provide any investment advice <a href="/#">(more)</a></p>
            <div className="header">
                <h1>NFT Drops</h1>
                <div className="btn_group">
                    <button><IconSubmit /> Submit</button>
                    <button><IconShare /> Share</button>
                </div>
            </div>
            <div className="subheader">
                <div className="btn_group">
                    <DatePicker
                        selected={dateFilter}
                        dateFormat={"MMM dd, yyyy"}
                        onChange={(date) => setDateFilter(date)}
                        customInput={<ExampleCustomInput />}
                    />
                    <button className='today' onClick={() => setDateFilter(new Date())}>Today</button>
                </div>
            </div>
            <div className="listings">
                {nftDropsList.map((item) => (
                    <NFTDropsCard key={item.id} image={item.image} title={item.title} tag={item.tag} 
                    desc={item.desc} price={item.price} total={item.total} date={item.date} 
                    website={item.website} twitter={item.twitter} discord={item.discord} />
                ))}
            </div>
        </NFTDropsPage>
      </>
  );
};

export default NFTDrops;
