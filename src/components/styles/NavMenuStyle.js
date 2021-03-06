import styled from "styled-components" 
import { lightColors, typographySize } from "../../helpers/theme"

export const MenuItem = styled.div`

a {
    text-decoration: none;
    padding: 0px 19px;
    font-weight: bolder;
    font-size: ${typographySize.md};
    color: ${lightColors.black};
    &:hover {
        color: ${lightColors.brandBlue};
    }
}
`

export const Popover = styled.div`
position: absolute;
width: 215px;
cursor: pointer;
background: #fff;
border-radius: 14px;
box-shadow: rgba(224, 224, 224, 0.4) 0px 4px 8px 0px;
padding: 6px;
padding-top: 8px;
overflow: auto;
max-height: 420px;
z-index: 1000;

&::-webkit-scrollbar {
width: 4px;
background: #ccc;
border-radius: 5px;
}

a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0px 16px;
  border-radius: 14px;
  font-weight: normal;
  color: ${lightColors.grey};
  
  svg {
    height: 18px;
    width: 18px;
    margin-right: 10px;
    fill: ${lightColors.grey};

    &:nth-child(2) {
        display: none;
    }
  }
  
  &:hover {
      background: ${lightColors.bgBlue};
      color: ${lightColors.lightBlue};

      svg {
          fill: ${lightColors.lightBlue};
          
          &:nth-child(2) {
              display: unset;
              color: ${lightColors.brandBlue};
         }
      }
  }
}
`