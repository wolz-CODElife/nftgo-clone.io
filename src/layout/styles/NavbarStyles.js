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
    padding-right: 40px;
    background: ${lightColors.white};
    color: ${lightColors.black};
    box-shadow: 0px 4px 6px #8a8a8a1a;
    position: fixed;
    top: 0px;
    z-index: 1200;

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

    .search {
        position: relative;
        width : 291px;
        height: 40px;
        background: ${lightColors.bgBlue};
        padding: 0px 16px;
        display: flex;
        align-items: center;
        border-radius: 20px;

        svg {
            margin-right: 10px; 
        }

        input {
            background: none;
            outline: none;
            border: none;
            overflow-x: hidden;
            flex: 1;
        }

        .pop_search {
            position: absolute;
            background: ${lightColors.white};
            width: 440px;
            height: 500px;
            top: 0px;
            left: 0px;
            padding: 24px 8px;
            box-shadow: rgba(224, 224, 224, 0.4) 0px 4px 8px 0px;
            border-radius: 14px;
            z-index: 1000000;

            .header {
                width: 100%;
                display: flex;
                align-items: center;

                .search {
                    flex: 1;
                }

                button {
                    background: none;
                    outline: none;
                    border: none;
                    cursor: pointer;
                    margin-left: 20px;
                    padding: 0px;
                }
            }

            h5 {
                margin: 25px 0px;
                color: ${lightColors.grey};
            }

            .body {
                a {
                    text-decoration: none;
                    color: ${lightColors.black};
                    display: flex;
                    align-items: center;
                    justify-content: space-betweeen;
                    height: 60px;
                    padding: 0px 12px;
                    border-radius: 14px;
                    
                    .info {
                        display: flex;
                        align-items: center;
                        flex: 1;

                        img {
                            width: 32px; 
                            height: 32px;
                            border-radius: 50%;
                        }
                        
                        h5 {
                            margin: 0px 10px;
                            color: ${lightColors.black};
                        }
                    }

                    svg {
                        width: 24px;
                        height: 24px;
                        display: none;
                        color: #ccc;
                    }

                    &:hover {
                        background: ${lightColors.bgBlue};

                        svg {
                            display: unset;
                        }
                    }
                }
            }
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
                    width: 138px;
                    cursor: pointer;
                    background: #fff;
                    border-radius: 14px;
                    z-index: 1000;
                    box-shadow: rgba(224, 224, 224, 0.4) 0px 4px 8px 0px;
                    overflow: auto;

                    button {
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                        border-radius: 14px;
                        padding: 10px 20px;
                        
                        &:hover {
                            background: ${lightColors.bgBlue};
                        }
                    }
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
                fill: ${lightColors.grey};

                &: hover {
                    fill: ${lightColors.lightBlue};
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
`;