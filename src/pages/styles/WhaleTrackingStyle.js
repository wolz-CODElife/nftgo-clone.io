import breakpoint from "../../helpers/breakpoint";
import styled from "styled-components" 
import { lightColors, typographySize } from "../../helpers/theme";

export const WhaleTrackingPage = styled.div`
    padding: 24px 76px;
    display: flex;
    flex-direction: column;
    
    
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