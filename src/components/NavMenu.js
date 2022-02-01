import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { lightColors, typographySize } from '../helpers/theme';
import { FaChevronCircleRight } from 'react-icons/fa';


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
                            <Link to={item.link}><span> {item.icon} {item.title}</span><FaChevronCircleRight /> </Link>
                        ))}
                    </Popover>
                }
            </div>
        }
      </MenuItem>
  );
};

export default NavMenu;

const MenuItem = styled.div`
    position: relative;
    
    a {
        text-decoration: none;
        padding: 0px 19px;
        font-weight: bolder;
        font-size: ${typographySize.md};
        color: ${lightColors.black};
        &:hover {
            color: ${lightColors.brandBlue};
        }
    }
`

const Popover = styled.div`
  position: absolute;
  width: 215px;
  cursor: pointer;
  background: #fff;
  border-radius: 14px;
  z-index: 1000;
  box-shadow: rgba(224, 224, 224, 0.4) 0px 4px 8px 0px;
  padding: 6px;
  padding-top: 8px;
  overflow: auto;
  max-height: 420px;

  &::-webkit-scrollbar {
    width: 4px;
    background: #ccc;
    border-radius: 5px;
}

  a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      padding: 0px 16px;
      border-radius: 14px;
      font-weight: normal;
      color: ${lightColors.grey};
      
      svg {
        height: 18px;
        width: 18px;
        margin-right: 10px;

        &:nth-child(2) {
            display: none;
        }
      }
      
      &:hover {
          background: ${lightColors.bgBlue};
          color: ${lightColors.lightBlue};

          svg {
              color: ${lightColors.lightBlue};
              
              &:nth-child(2) {
                  display: unset;
                  color: ${lightColors.brandBlue};
             }
          }
      }
    }
`