import breakpoint from "../../helpers/breakpoint";
import styled from "styled-components" 
import { lightColors, typographySize } from "../../helpers/theme";

export const NFTDropsPage = styled.div`
    padding: 24px 76px;
    display: flex;
    flex-direction: column;

    p.note {
        font-size: ${typographySize.md};
        color: ${lightColors.grey};
        width: 100%;
        text-align: center;

        a {
            color: ${lightColors.brandBlue};
            text-decoration: none;
        }
    }

    .header {
        position: relative;
        width: 100%;
        margin-top: 34px; 
        height: 48px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .btn_group {
            position: absolute;
            right: 0px;
            top: 0px;
            display: flex;
            align-items: center;
            height: 100%;

            button {
                border-radius: 6px;
                border: none;
                outline: none;
                width: 84px;
                height: 32px;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                filter: brightness(1.1);
                cursor: pointer;
                
                svg {
                    margin-right: 5px;
                }

                &:first-of-type {
                    background: ${lightColors.white};
                    color: ${lightColors.grey};
                    margin-right: 15px;
                }
                
                &:last-of-type {
                    background: ${lightColors.brandBlue};
                    color: ${lightColors.white};
                }

                &:hover {
                    filter: brightness(0.95);
                }
            }
        }
    }

    .subheader {
        display: flex;
        justify-content: flex-end;

        .btn_group {
            background: ${lightColors.white};
            min-width: 328px;
            height: 40px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px;

            .today {
                background: ${lightColors.brandBlue};
                color: ${lightColors.white};
                border: none;
                outline: none;
                cursor: pointer;
                filter: brightness(1.1);
                border-radius: 6px;
                width: 67px;
                height: 30px;
            }
        }
    }

    .listings {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 24px 10px;
        padding: 24px 20px;
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

export const DatePickerBtn = styled.p`
    font-size: ${typographySize.md};
    color: ${lightColors.grey};
    display: flex;
    align-items: center;
    
    .date_picker_nav {
        margin: 0px 10px;
        margin-top: 5px;
        cursor: pointer;
        
        &:nth-of-type(1) {
            margin-left: 15px;
        }
        
        &:last-of-type {
            margin-right: 15px;
            transform: rotateY(180deg);
        }
        
        svg {
            stroke: ${lightColors.grey};
        }
        
        &:hover {
            svg {
                stroke: ${lightColors.lightBlue};
            }
        }
    }
    
    .date_picker {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: ${lightColors.grey};
        font-size: ${typographySize.md};
        font-weight: bolder;

        svg {
            margin-left: 5px;
        }
    }
` 