import breakpoint from "../../helpers/breakpoint";
import styled from "styled-components" 
import { lightColors, typographySize } from "../../helpers/theme";


export const NFTDropsContainer = styled.div`
    padding: 16px;
    border: 1px solid #EDEDF1;
    border-radius: 12px;
    height: 344px;
    width: 280px;
    background: ${lightColors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: ease 0.4s;

    &:hover {
        box-shadow: rgba(90, 96, 249, 0.2) 0px 4px 10px 0px;
    }
    
    .header {
        border-bottom: 1px solid #EDEDF1;
        display: flex;
        flex-direction: column;
        height: min-content;
        margin: 0px;
        font-size: ${typographySize.sm};

        .profile {
            display: flex;

            img {
                width: 56px;
                height: 56px;
                border-radius: 50%;
                margin: 0px 5px;
            }

            .title {
                margin: 0px 5px;
                
                h1 {
                    font-size: ${typographySize.lg};
                }

                span {
                    font-size: ${typographySize.sm};
                    font-weight: bold;
                    padding: 0px 5px;
                    border-radius: 6px; 
                }
            }
        }

        .desc {
            margin: 8px 0px;
            color: ${lightColors.grey};

            span {
                float: right;

                a {
                    text-decoration: none;
                    color: ${lightColors.brandBlue};
                }
            }
        }
    }

    .body {
        font-size: ${typographySize.md};

        .tr {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;
        }
    }

    .countdown {
        border: 1px solid #EDEDF1;
        border-radius: 8px;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: ${typographySize.lg};
            color: ${lightColors.grey};
        }

        &.timer {
            display: flex;
            align-items: flex-start;
            padding-top: 5px;
            
            .count_item {
                width: 55px;
                height: 34px;
                display: flex;
                flex-direction: column;
                
                span {
                    text-align: center;
                    margin: 0px;

                    &:first-of-type {
                        font-weight: bold;
                        color: ${lightColors.brandBlue};
                    }

                    &:last-of-type {
                        font-size: ${typographySize.sm};
                    }
                }
            }
            
            .divider {
                color: ${lightColors.brandBlue};
                font-weight: bold;
            }
        }
    }
    
    .footer {
        height: 42px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .links {
            width: 112px;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            svg {
                width: 24px;
                height: 24px;
                margin-right: 20px;
            }
        }

        .event {
            display: flex;
            align-items: center;

            svg {
                margin-right: 12px;
            }

            a:last-of-type {
                border: 1px solid ${lightColors.brandBlue};
                color: ${lightColors.brandBlue};
                text-decoration: none;
                border-radius: 86px;
                height: 32px;
                padding: 0px 16px;
                cursor: pointer;
                display: flex;
                align-items: center;
                
                &:hover {
                    background: ${lightColors.brandBlue};
                    color: ${lightColors.white};
                }
            }
        }
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

export const ModalContainer = styled.div`
    background: ${lightColors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 24px;
    max-width: 595px;
    border-radius: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    button {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
    }

    img {
        width: 104px;
        height: 104px;
    }

    h1 {
        font-size: ${typographySize.xlg};
        margin: 16px 0px;
    }

    p {
        font-size: ${typographySize.ld};
        color: ${lightColors.grey};
    }
`