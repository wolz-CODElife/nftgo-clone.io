import styled from "styled-components" 
import { lightColors, typographySize } from "../../helpers/theme";

export const WhaleTradeHeaderContainer = styled.div`
    margin-top: 20px;

    h1 {
        font-size: ${typographySize.xlg};
    }
    
    p {
        color: ${lightColors.grey};
        font-size: ${typographySize.md};

        span {
            color: ${lightColors.brandBlue};
            font-weight: bold;
        }

        svg {
            margin: 0px 5px;
        }
        
        a {
            color: ${lightColors.grey};
        }
    }

    .subheader {
        display: flex;
        margin-top: 24px;
        
        a{
            background: ${lightColors.white};
            color: ${lightColors.brandBlue};
            height: 40px;
            padding: 0px 24px;
            display: flex;
            align-items: center;
            border-radius: 12px;
            margin-right: 24px;
            font-size: ${typographySize.md};
            font-weight: bold;
            text-decoration: none;
            filter: brightness(1.08);
            position: relative;
            
            &.active {
                background: ${lightColors.brandBlue};
                color: ${lightColors.white};
            }

            &:hover {
                filter: brightness(0.99);
            }

            span {
                position: absolute;
                top: -10px;
                right: -20px;
                background: #FF664F;
                padding: 0px 4px;
                font-size: ${typographySize.sm};
                border-radius: 4px;
                color: ${lightColors.white};
            }
        }
    }
`