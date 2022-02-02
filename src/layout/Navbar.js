import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../assets/icons/brand';
import { IconCloseSearch, IconDark, IconLanguagesDown, IconLanguagesUp, IconProfile, IconSearch } from '../assets/icons/icons';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import NavMenu from '../components/NavMenu';
import { menuList } from '../helpers/navmenu';
import { FixedTop } from './styles/NavbarStyles';
import { FaChevronCircleRight } from 'react-icons/fa';

const Navbar = () => {
  const [openLang, setOpenLang] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const handleLangOpen = () => {
    setOpenLang(true);
  };
  
  const handleLangClose = () => {
    setOpenLang(false)
  };

  const handleSearchOpen = () => {
    setOpenSearch(true);
  };
  
  const handleSearchClose = () => {
    setOpenSearch(false)
  };
  
  return (
    <>
      <FixedTop>
        <Link to="/" className="brand">
          <Logo />
        </Link>
        <div className="menu">
          {menuList.map(menu => (
            <NavMenu key={menu.title} title={menu.title} link={menu.link} dropdown={menu.dropdown} />
          ))}
        </div>
        <div className="search">
          <>
            <IconSearch />
            <input type="text" placeholder='Search Collections / Addresses / NFTs' onClick={handleSearchOpen} />

            {/* Popup Search */}
            {openSearch &&
            <ClickAwayListener onClickAway={handleSearchClose}>
              <div className="pop_search">
                <div className="header">
                  <div className="search">
                    <IconSearch />
                    <input type="text" placeholder='Search Collections / Addresses / NFTs' />
                  </div>
                  <button onClick={handleSearchClose}>
                    <IconCloseSearch />
                  </button>
                </div>
                <h5>HOT</h5>
                <div className="body">
                  <Link to="#">
                    <div className="info">
                      <img src="https://i.postimg.cc/15jYRpQc/image.png" alt="Meebits" />
                      <h5>Meebits</h5>
                    </div>
                    <FaChevronCircleRight />
                  </Link>
                  <Link to="#">
                    <div className="info">
                      <img src="https://i.postimg.cc/W4M97CJX/image.png" alt="Terraforms by Mathcastles" />
                      <h5>Terraforms by Mathcastles</h5>
                    </div>
                    <FaChevronCircleRight />
                  </Link>
                  <Link to="#">
                    <div className="info">
                      <img src="https://i.postimg.cc/bJm9ChYH/image.png" alt="Azuki" />
                      <h5>Azuki</h5>
                    </div>
                    <FaChevronCircleRight />
                  </Link>
                  <Link to="#">
                    <div className="info">
                      <img src="https://i.postimg.cc/pTcKQJks/image.png" alt="V1 CryptoPunks Wrapped" />
                      <h5>V1 CryptoPunks Wrapped</h5>
                    </div>
                    <FaChevronCircleRight />
                  </Link>
                  <Link to="#">
                    <div className="info">
                      <img src="https://i.postimg.cc/dtyGddC9/image.png" alt="Lives of Asuna" />
                      <h5>Lives of Asuna</h5>
                    </div>
                    <FaChevronCircleRight />
                  </Link>
                  <Link to="#">
                    <div className="info">
                      <img src="https://i.postimg.cc/jqGZGRQZ/image.png" alt="Cool Cats NFT" />
                      <h5>Cool Cats NFT</h5>
                    </div>
                    <FaChevronCircleRight />
                  </Link>
                </div>
              </div>
            </ClickAwayListener>
            }
          </>
        </div>
        <div className="icons">
          <div className="theme">
            <IconDark />
            <div className="lang">
              <button onClick={handleLangOpen}>EN {openLang ? <IconLanguagesDown /> : <IconLanguagesUp /> }</button>
              {openLang && 
                <ClickAwayListener onClickAway={handleLangClose}>
                  <div className='popover' >
                    <button><span>English</span><span>EN</span></button>
                    <button><span>简体中文</span><span>ZH</span></button>
                    <button><span>한국어</span><span>KO</span></button>
                  </div>
                </ClickAwayListener>
              }
            </div>
          </div>
          <Link to="/signin" className='profile'><IconProfile /></Link>
        </div>
      </FixedTop>
      <div style={{ height: '80px', width: '100%' }}></div>
    </>
  )
};

export default Navbar;

