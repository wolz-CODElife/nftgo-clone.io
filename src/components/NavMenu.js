import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaChevronCircleRight } from 'react-icons/fa';
import { MenuItem, Popover } from './styles/NavMenuStyle';


const NavMenu = ({title, link, dropdown}) => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const handleDropdownOpen = () => {
      setOpenDropdown(true);
    };
    
    const handleDropdownClose = () => {
      setOpenDropdown(false)
    };
    
  return (
      <MenuItem>
        {(link && !dropdown) &&
            <Link to={link}>{title}</Link>
        }
        { dropdown && 
            <div onMouseLeave={handleDropdownClose}>
                <Link to={link ? link : "#"} onMouseEnter={handleDropdownOpen}>{title}</Link>
                { openDropdown &&
                    <Popover>
                        {dropdown.map(item => (
                            <a key={item.title} href={item.link} target={item.link.includes("http") ? "_blank" : "_self"} rel="noopener noreferrer"><span> {item.icon} {item.title}</span><FaChevronCircleRight /> </a>
                        ))}
                    </Popover>
                }
            </div>
        }
      </MenuItem>
  );
};

export default NavMenu;
