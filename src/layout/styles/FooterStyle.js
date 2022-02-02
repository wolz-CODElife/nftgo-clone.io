import breakpoint from "../../helpers/breakpoint";
import styled from "styled-components" 
import { lightColors, typographySize } from "../../helpers/theme";


export const FooterHeading = styled.div`
    width: 100%;

    .header {
        background: ${lightColors.brandBlue};
        flex: 1;
        display: flex;
        align-items: center;
        color: ${lightColors.white};
        height: 128px;
        padding: 0px 132px;

        h2 {
            font-size: ${typographySize.xlg};
        }
        .subscribe {
            position: relative;
            height: 100%;
            width: 496px;
            display: flex;
            align-items: center;
            margin-left: 40px;
            
            svg {
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0px;
                bottom: 0px;
                display: block;
                z-index: 0;
            }
            
            .form {
                width: 458px;
                height: 44px;
                margin-left: 40px;
                background: ${lightColors.white};
                border-radius: 10px;
                padding: 2px;
                display: flex;
                z-index: 0;
                
                input {
                    flex: 1;
                    background: none;
                    border: none;
                    outline: none;
                    font-size: ${typographySize.md};
                    padding: 0px 15px;
                }

                button {
                    width: 136px;
                    font-size: ${typographySize.lg};
                    background: ${lightColors.brandBlue};
                    color: ${lightColors.white};
                    height: 100%;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    border-radius: 8px;
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

export const FooterBottom = styled.div`
    padding: 40px 132px;
    background: ${lightColors.white};

    .links {
        display: grid;
        grid-template-columns: 432px repeat(4, 1fr);
        padding: 15px 0px;
        color: ${lightColors.grey};

        .col-1 {
            h3 {
                font-size: ${typographySize.lg};
            }

            .socials {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 300px;
                margin: 10px 0px;
            }
        }
        .col {
            .title {
                color: ${lightColors.brandBlue};
                font-size: ${typographySize.lg};
            }
            .items {
                a {
                    display: block;
                    text-decoration: none;
                    color: ${lightColors.grey};
                    font-size: ${typographySize.md};
                    margin: 12px 0px;
                }

                a.hiring {
                    background: ${lightColors.bgBlue};
                    padding: 4px;
                    width: 115px;
                    height: 32px;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;

                    &:hover {
                        background: ${lightColors.brandBlue};
                        color: ${lightColors.white};
                    }
                }
            }
        }
    }
    p {
        font-size: 14px; 
    }

`