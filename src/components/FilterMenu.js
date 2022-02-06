import React, { useEffect, useState } from 'react';
import { FilterMenuItem, Popover } from './styles/FilterMenuStyle';
import { ClickAwayListener } from '@mui/material';
import { IconCaretDown } from '../assets/icons/icons';


const FilterMenu = ({onTagChange, selected, dropdown}) => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [selectedCategory,  setSelectedCategory] = useState({})
    
    useEffect(() => {
        let newSelectedCategory = dropdown?.filter(item => item.tag === selected)
        setSelectedCategory(newSelectedCategory[0])
    }, [selected, dropdown])
    const handleDropdownOpen = (e) => {
        e.preventDefault()
      setOpenDropdown(true);
    };
    
    const handleDropdownClose = () => {
      setOpenDropdown(false)
    };
    
  return (
      <FilterMenuItem>
        { dropdown && 
            <ClickAwayListener onClickAway={handleDropdownClose}>
                <div className='dropdown_container'>
                    <button onClick={handleDropdownOpen} className="drop_btn">{selectedCategory.icon || ""} {selectedCategory.title} <IconCaretDown /></button>
                    { openDropdown &&
                        <Popover>
                            {dropdown.map(item => (
                                <button key={item.title} onClick={() => onTagChange(item.tag)}><span> {item.icon || ""} {item.title}</span> </button>
                            ))}
                        </Popover>
                    }
                </div>
            </ClickAwayListener>
        }
      </FilterMenuItem>
  );
};

export default FilterMenu;
