import breakpoint from "../../helpers/breakpoint";
import styled from "styled-components" 

export const AllWhalesPage = styled.div`
    padding: 24px 76px;
    display: flex;
    flex-direction: column;
    
    .columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }
    
    // ==============================================================
    // Media-query
    // ==============================================================
    @media only screen and ${breakpoint.device.xs}{
        display: none;
    }
    @media only screen and ${breakpoint.device.sm}{
        display: flex;
    }
    @media only screen and ${breakpoint.device.lg}{
        display: flex;
    }
`