import React, { useState } from 'react';
import { google } from "calendar-link";
import { ModalContainer, NFTDropsContainer } from './styles/NFTDropsCardStyles';
import { IconAddCalendar, IconCloseSearch, IconDate, IconPriceTag, IconsDiscord, IconTotal, IconTwitter, IconWebsite } from '../assets/icons/icons';
import Countdown from 'react-countdown'
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';


const NFTDropsCard = ({image, title, tag, desc, price, total, date, website, twitter, discord}) => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = (e) => {
        e.preventDefault()
        setOpenModal(true)
    };
    const handleClose = (e) => {
        e.preventDefault()
        setOpenModal(false)
    };
    
    const googleEvent = {
        title: title,
        description: desc,
        location: website,
        start: date,
        duration: [30, "minutes"],
      };
      
    const launchDate = new Date(date)
    const calendarLink = google(googleEvent);
    const dateDiff = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60));
    const minutesDiff = dateDiff(launchDate, new Date())
    const tagBg = {
        "Avatar": "rgba(38, 153, 88, 0.1)",
        "Art": "rgba(38, 153, 88, 0.1)",
        "DeFi": "rgba(38, 153, 88, 0.1)",
        "Social": "rgba(90, 102, 249, 0.1)",
        "Collectibles": "rgba(90, 102, 249, 0.1)",
        "Metaverse": "rgba(30, 162, 166, 0.1)",
        "Game": "rgba(187, 107, 217, 0.1)",
        "Utility": "rgba(187, 107, 217, 0.1)",
    }
    
    const tagColor = {
        "Avatar": "rgb(38, 153, 88)",
        "Art": "rgb(38, 153, 88)",
        "DeFi": "rgb(38, 153, 88)",
        "Social": "rgb(90, 102, 249)",
        "Collectibles": "rgb(90, 102, 249)",
        "Metaverse": "rgb(30, 162, 166)",
        "Game": "rgb(187, 107, 217)",
        "Utility": "rgb(187, 107, 217)",
    }
return (
    <>
        <NFTDropsContainer>
            <div className="header">
                <div className="profile">
                    <img src={image} alt={title} />
                    <div className="title">
                        <h1>{title}</h1>
                        <span style={{background: tagBg[tag], color: tagColor[tag]}}
                        >{tag}</span>
                    </div>
                </div>
                <div className="desc">{desc.split(/\W+/).splice(0, 10).join(" ")} <span>... <a href="/#" onClick={handleOpen}>View all</a></span></div>
            </div>
            <div className="body">
                <div className="tr">
                    <p><IconPriceTag /> Price</p>
                    <p>{price} ETH</p>
                </div>
                <div className="tr">
                    <p><IconTotal /> Total</p>
                    <p>{total}</p>
                </div>
                <div className="tr">
                    <p><IconDate /> Date</p>
                    <p>{date}</p>
                </div>
            </div>
            <Countdown date={launchDate} renderer={({ days, hours, minutes, seconds, completed }) => (
                <>
                    {completed ?
                        (minutesDiff) > 30 ? 
                        <div className="countdown">
                            <h1>Expired</h1>
                        </div>
                        :
                        <div className="countdown">
                            <h1>🔥 Live</h1>
                        </div>
                    :
                    <div className="countdown timer">
                        <div className="count_item">
                            <span>{days}</span>
                            <span>Day</span>
                        </div>
                        <span className="divider">:</span>
                        <div className="count_item">
                            <span>{hours}</span>
                            <span>Hrs</span>
                        </div>
                        <span className="divider">:</span>
                        <div className="count_item">
                            <span>{minutes}</span>
                            <span>Min</span>
                        </div>
                        <span className="divider">:</span>
                        <div className="count_item">
                            <span>{seconds}</span>
                            <span>Sec</span>
                        </div>
                    </div>
                    }
                    <div className="footer">
                        <div className="links">
                            {website && 
                                <Tooltip title="Website" arrow placement='top'>
                                    <a href={website} target="_blank" rel='noopener noreferrer'><IconWebsite /></a>
                                </Tooltip>
                            }
                            {twitter && 
                                <Tooltip title="Twitter" arrow placement='top'>
                                    <a href={twitter} target="_blank" rel='noopener noreferrer'><IconTwitter /></a> 
                                </Tooltip> 
                            }
                            {discord && 
                                <Tooltip title="Discord" arrow placement='top'>
                                    <a href={discord} target="_blank" rel='noopener noreferrer'><IconsDiscord /></a>
                                </Tooltip> 
                            }
                        </div>
                        <div className="event">
                            { !completed && <a href={calendarLink} target="_blank" rel="noopener noreferrer"><IconAddCalendar /></a> }
                            <a href={website} target="_blank" rel="noopener noreferrer">Mint</a>
                        </div>
                    </div>
                </>
            )} />
        </NFTDropsContainer>
        <Modal open={openModal} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
            <ModalContainer>
                <button onClick={handleClose}><IconCloseSearch /></button>
                <img src={image} alt={title} />
                <h1>{title}</h1>
                <p>{desc}</p>
            </ModalContainer>
        </Modal>
    </>
)};

export default NFTDropsCard;
