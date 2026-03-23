import styled from "styled-components";
export const Sheader = styled.header`
width: 100%;
background-color: #000000ff;
top: 0px;
left: 0px;
position: absolute; `;
export const HeaderMain = styled.div`
width: 100%;
  margin: 0 auto; `;
export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px; `;
export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px; `;
export const HeaderLogo = styled.div`
  width: 85px;`;
export const Show = styled.div`
  display: block;`;

export const HeaderNav = styled.nav`
  max-width: 390px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center; `;
export const HeaderBtnMainNew = styled.button`
  width: 278px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px; 

  &:hover {
  background-color: #33399b;
  }`;
  export const Ssylka = styled.a`
  color: #FFFFFF;`;
export const HeaderUser = styled.a`
  height: 20px;
  width: 200px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF; 

  &:hover {
  color: ##565EEF;
  }
  &:after {
    content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  border-left: 1.9px solid #FFFFFF;
  border-bottom: 1.9px solid #FFFFFF;
  transform: rotate(-45deg);
  margin: -6px 0 0 5px;
  padding: 0;
  } `;
   export const Logo = styled.img`
   margin-top: 20px;
   width: 300px;
   height: 230px;`;
