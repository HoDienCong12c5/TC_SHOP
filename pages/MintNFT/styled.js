import { Col, Form, Row, Select } from 'antd';
import styled, { css } from 'styled-components';
export const ContainerMintNFT = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 16px; 
    border: 1px solid black;
`
export const PreImg = styled.img`
   width: 100%;
    height: auto;
    max-height: 100%;
    width: auto;
    width: max-content;
    margin: auto;
`
export const RowCustom = styled(Row)`
    /* padding: 0px 20px 20px 30px; */
    /* border-bottom: ${props=>props.isEnd ?? '1px solid black'};  */
`
export const ItemForm = styled(Form.Item)`
    ${props=>props.isEnd
    ? css`
     border-top: 1px solid black;
    `
    : props.isStart
      ? css`
      padding-top: 10px;
    `
      : css`
    padding-top: 10px;
    border-top: 1px solid black;
    `
}
   
`
export const ColCustom = styled(Col)`
    /* padding: 0px 20px 20px 30px; */
    padding-right:25px; 
`

export const ContainerImgMintNFT = styled.div`
   width: 550px;
   height: 400px; 
   margin: auto;
   padding-top: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`
export const SelectCoursers = styled(Select)`
   min-width: 200px;
`
export const SelectOption = styled(Select.Option)``
export default () => {};
