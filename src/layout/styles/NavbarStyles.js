import breakpoint from "../../helpers/breakpoint";
import styled from "styled-components" 
import { lightColors } from "../../helpers/theme";

export const FixedTop = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0px 50px;
    background: ${lightColors.white};
    color: ${lightColors.black}

    .brand {
        margin: 0px 48px;

        svg {
            height: 44px;
        }
    }

    .menu {
        display: flex;

        a {

        }
    }

    .icons {
        display: flex;
        align-items: center;

        .theme {
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 56px;
            width: 194px;
            border-right: 1px solid  #EDEDF1;

            .lang {
                position: relative;

                .popover {
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
                }

                button {
                    background: none;
                    outline: none;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    padding: 5px;
                    padding-left: 15px;

                    svg {
                        margin-left: 10px;
                    }

                    &:hover {
                        background: ${lightColors.bgBlue};
                    }
                }
            }
        }

        .profile {
            padding: 28px;
            svg {
                width: 28px;
                height: 28px;
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
`;