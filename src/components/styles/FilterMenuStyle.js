import styled from "styled-components" 
import { lightColors, typographySize } from "../../helpers/theme"

export const FilterMenuItem = styled.div`
    position: relative;

    .dropdown_container {
        .drop_btn {
            border: 1px solid #EDEDF1;
            border-radius: 12px;
            padding: 0px 16px;
            margin-left: 20px;
            height: 40px;
            min-width: 95px;
            font-size: ${typographySize.md};
            background: ${lightColors.white};
            display: flex;
            align-items: center;
            cursor: pointer;

            svg {
                fill: ${lightColors.grey};
                margin: 0px 10px;
            }

            &:hover {
                filter: brightness(0.98);
            }
        }
    }
`

export const Popover = styled.div`
position: absolute;
width: 180px;
cursor: pointer;
background: #fff;
border-radius: 14px;
box-shadow: rgba(224, 224, 224, 0.4) 0px 4px 8px 0px;
padding: 6px;
padding-top: 8px;
overflow: auto;
max-height: 420px;
margin-top: 5px;
z-index: 1000;
right: 0px;

&::-webkit-scrollbar {
width: 4px;
background: #ccc;
border-radius: 5px;
}

button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0px 16px;
  width: 100%;  
  border-radius: 14px;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
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