import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../assets/icons/brand';
import { IconDark, IconLanguagesDown, IconLanguagesUp, IconProfile } from '../assets/icons/icons';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import NavMenu from '../components/NavMenu';
import { menuList } from '../helpers/navmenu';
import { FixedTop } from './styles/NavbarStyles';

const Navbar = () => {
  const [openLang, setOpenLang] = useState(false)
  const handleLangOpen = () => {
    setOpenLang(true);
  };
  
  const handleLangClose = () => {
    setOpenLang(false)
  };
  
  return (
        <FixedTop>
          <Link to="/" className="brand">
            <Logo />
          </Link>
          <div className="menu">
            {menuList.map(menu => (
              <NavMenu key={menu.title} title={menu.title} link={menu.link} dropdown={menu.dropdown} />
            ))}
          </div>
          <div className="icons">
            <div className="theme">
              <IconDark />
              <div className="lang">
                <button onClick={handleLangOpen}>EN {openLang ? <IconLanguagesDown /> : <IconLanguagesUp /> }</button>
                {openLang && 
                  <ClickAwayListener onClickAway={handleLangClose}>
                    <div className='popover' >

                    </div>
                  </ClickAwayListener>
                }
              </div>
            </div>
            <Link to="/wallet" className='profile'><IconProfile /></Link>
          </div>
        </FixedTop>
  )
};

export default Navbar;

