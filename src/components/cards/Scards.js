import styled from "styled-components";
export const Card = styled.div`
  width: 100%;
  display: block;
  position: relative; `;
export const CardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear; `;
export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 13px; `;
export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between; `;
export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px; `;
  export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px; `;
  export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px; `;
  export const CardContent = styled.div`
    height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between; `;
  export const CardDate = styled.div`
    display: flex;
  align-items: center;
    margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94A6BE;
  letter-spacing: 0.2px;
    width: 13px;
  justify-content: flex-start; `;
export const Orange = styled.p`
  background-color: rgba(255, 123, 0, 0.4);
  color: rgb(255, 123, 0);
  padding: 5px 20px 5px 20px;
  font-size: 16px;
  font-family: font-family: "PT Sans", "Arial", sans-serif; 
  margin: 0px;
  border-radius: 10px;
`;
export const Green = styled.p`
  background-color: rgba(37, 176, 67, 0.4);
  color: rgb(37, 176, 67);
  padding: 5px 20px 5px 20px;
  font-size: 16px;
  font-family: font-family: "PT Sans", "Arial", sans-serif; 
  margin: 0px;
  border-radius: 10px;
`;
export const Violet = styled.p`
  background-color: rgba(92, 41, 222, 0.4);
  color: rgb(92, 41, 222);
 padding: 5px 20px 5px 20px;
  font-size: 16px;
  font-family: font-family: "PT Sans", "Arial", sans-serif; 
  margin: 0px;
  border-radius: 10px;
`;
export const Red = styled.p`
  background-color: rgba(222, 41, 41, 0.4);
  color: rgb(222, 41, 41);
  padding: 5px 20px 5px 20px;
  font-size: 16px;
  font-family: font-family: "PT Sans", "Arial", sans-serif; 
  margin: 0px;
  border-radius: 10px;
`;
export const Brown = styled.p`
  background-color: rgba(152, 90, 3, 0.4);
  color: rgb(152, 90, 3);
  padding: 5px 20px 5px 20px;
  font-size: 16px;
  font-family: font-family: "PT Sans", "Arial", sans-serif; 
  margin: 0px;
  border-radius: 10px;
`;
export const PopBrowse = styled.a`
  display: none;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7; `;

  export const Checkbox = styled.input`
  width: 18px;
  height: 18px;`;