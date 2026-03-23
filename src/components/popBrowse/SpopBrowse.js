import syled from "styled-components";

export const PopBrowse = syled.div`
  display: none;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7; `;

export const PopBrowseContainer = syled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4); `;

export const PopBrowseBlock = syled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative; `;

export const PopBrowseContent = syled.div`
  display: block;
  text-align: left; `;

export const PopBrowseTopBlock = syled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px; `;

export const PopBrowseTtl = syled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px; `;

export const Status = syled.div`
  margin-bottom: 11px; `;
  
export const StatusThemes = syled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start; `;

export const StatusTheme = syled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px; 
  ${props => props.active === 'hidden' && 'display: none'}
   ${props => props.active === 'active' && 'display: block'} `;

export const PopBrowseWrap = syled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between; `;

export const PopBrowseForm = syled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px; `;

export const FormBrowseBlock = syled.div`
    max-width: 100%; `;

export const FormBrowseArea = syled.div`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px; `;

export const CategoriesTheme = syled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  ${props => props.color === 'orange' && 'background-color: #FF9900'} 
  ${props => props.color === 'green' && 'background-color: #25b043'} 
  ${props => props.color === 'purple' && 'background-color: #5c29de'} `;

export const PopBrowseBtn = syled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between; `;

export const BtnGroup = syled.div`
  margin-right: 8px; `;
export const BtnBrowseEdit = syled.button`
  margin-right: 8px; 
    ${props => props.active === 'hidden' && 'display: none'}
   ${props => props.active === 'active' && 'display: block'} `;

export const BtnBor = syled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  background: transparent;
  color: #565EEF; `;

export const BtnBg = syled.button`
 color: #FFFFFF; `;


