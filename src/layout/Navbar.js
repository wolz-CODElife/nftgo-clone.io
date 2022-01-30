import React from 'react';
import breakpoint from 'Commons/breakpoints';
import styled from ''

const Navbar = () => {
  return (
      <FixedTop>

      </FixedTop>
  )
};

export default Navbar;

const FixedTop = styled.div`
    @media only screen and ${breakpoint.device.xs}{
        display: none;
    }
    @media only screen and ${breakpoint.device.sm}{
        display: flex;
    }
    @media only screen and ${breakpoint.device.lg}{
        display: flex;
    }
`;