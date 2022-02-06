import styled from "styled-components" 
import { lightColors, typographySize } from "../../helpers/theme";

export const RankHeaderContainer = styled.div`
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
            font-size: ${typographySize.lg};
            font-weight: bold;
        }
    }

    .subheader {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 24px;
        
        .links {
            display: flex;

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

        .filters {
            display: flex;
            align-items: center;

            .filter {
                display: flex;
                align-items: center;
            }

            .mint_filter {
                background: ${lightColors.bgBlue};
                filter: brightness(0.98);
                padding: 5px;
                border-radius: 6px;
                
                button {
                    background: none;
                    border: none;
                    outline: none;
                    border-radius: 5px;
                    padding: 5px 10px;
                    cursor: pointer;

                    &.active {
                        background: ${lightColors.brandBlue};
                        color: ${lightColors.white};
                        filter: brightness(1.2);
                    }
                }
            }
        }
    }
`