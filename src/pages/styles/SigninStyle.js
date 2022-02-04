import breakpoint from "../../helpers/breakpoint";
import styled from "styled-components" 
import { lightColors, typographySize } from "../../helpers/theme";

export const SigninForm = styled.div`
    background: ${lightColors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0px;

    .title {
        text-align: center;

        p {
            font-size: ${typographySize.lg};
        }
    }

    .wallets {
        display: flex;
        flex-direction: column;
        margin-top: 56px;

        button {
            height: 72px;
            width: 452px;
            padding: 24px;
            border: 1px solid #D7D9F2;
            display: flex;
            flex-direction: row;
            align-items: center;
            background: none;
            margin-bottom: 16px;
            border-radius: 14px;
            cursor: pointer;
            transition: all ease 0.4s;

            img {
                width: 48px;
                height: 48px;
                margin: 0px 48px;
            }

            &:hover {
                border: 1px solid #5A66F9;
                background: ${lightColors.bgBlue};
            }
        }

        a {
            text-decoration: none;
            color: ${lightColors.black};
            flex: 1;
            text-align: center;
            font-size: ${typographySize.lg};
            margin: 24px 0px;

            &:hover {
                color: ${lightColors.lightBlue};
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