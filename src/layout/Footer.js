import React from 'react';
import { Logo } from '../assets/icons/brand';
import { Link } from 'react-router-dom'
import { SVGfooterSubscription } from '../assets/icons/illustrations';
import { FooterBottom, FooterHeading } from './styles/FooterStyle';
import { IconDiscord, IconMail, IconMirror, IconTelegram, IconTwitter } from '../assets/icons/icons';

const Footer = () => {
  return (
      <>
        <FooterHeading>
            <div className="header">
                <div className="text">
                    <h2>Be the first to know about NFT news!</h2>
                    <p>Get NFT drops, whales activities and updates right to your inbox! Never miss the first news!</p>
                </div>
                <div className="subscribe">
                    <SVGfooterSubscription />
                    <div className="form">
                        <input type="text" placeholder='Enter your email address' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </FooterHeading>
        <FooterBottom>
            <div className="body">
                <div className="brand">
                    <Logo />
                </div>
                <div className="links">
                    <div className="col-1">
                        <h3>Join Our Community</h3>
                        <div className="socials">
                            <a href="https://twitter.com/nftgoio" target="_blank" rel="noopener noreferrer"><IconTwitter /></a>
                            <a href="https://discord.com/invite/38E4sEaFJr" target="_blank" rel="noopener noreferrer"><IconDiscord /></a>
                            <a href="https://t.me/nftgoofficial" target="_blank" rel="noopener noreferrer"><IconTelegram /></a>
                            <a href="https://mirror.xyz/nftgoio.eth" target="_blank" rel="noopener noreferrer"><IconMirror /></a>
                            <a href="mail:team@nftgo.io"><IconMail /></a>
                        </div>
                    </div>
                    <div className="col">
                        <h3 className="title">Sitemap</h3>
                        <div className="items">
                            <Link to="/rank/collection">Ranking</Link>
                            <Link to="/overview">Analysis</Link>
                            <Link to="/search">NFTs</Link>
                            <Link to="/whale-tracking">Whales</Link>
                            <Link to="/nft-drops">Drops</Link>
                        </div>
                    </div>
                    <div className="col">
                        <h3 className="title">Links</h3>
                        <div className="items">
                            <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer">Opensea</a>
                            <a href="https://rarible.com/" target="_blank" rel="noopener noreferrer">Rarible</a>
                            <a href="https://superrare.com/" target="_blank" rel="noopener noreferrer">Super Rare</a>
                        </div>
                    </div>
                    <div className="col">
                        <h3 className="title">Support</h3>
                        <div className="items">
                            <a href="https://docs.nftgo.io/guide/faq" target="_blank" rel="noopener noreferrer">FAQ</a>
                            <a href="https://docs.nftgo.io/guide/listing-criteria">Listing Request</a>
                        </div>
                    </div>
                    <div className="col">
                        <h3 className="title">Company</h3>
                        <div className="items">
                            <a href="https://nftgo.notion.site/NFTGo-About-us-20822f3b1f9141e49916cc73b9e0244c" target="_blank" rel="noopener noreferrer">About Us</a>
                            <a href="https://nftgo.io/termsOfService" target="_blank" rel="noopener noreferrer">Terms of Use</a>
                            <a href="https://nftgo.io/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                            <a href="https://angel.co/company/nftgo/jobs" target="_blank"  rel="noopener noreferrer" className='hiring'>🔥 We're hiring!</a>
                        </div>
                    </div>
                </div>
                <p className="copyright">
                © 2021 NFTGo — All rights reserved
                </p>
            </div>
        </FooterBottom>
      </>
    );
};

export default Footer;
