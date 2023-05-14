import styled from 'styled-components';
export const ContainerHeader = styled.div`
    max-width: 1450px;
    padding: 0 50px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    margin: auto;
    border-bottom: 1px solid white;
    @media screen and (max-width: 768px) {
      padding: 0 20px;
    }
`;
export const ItemHeader = styled.div`

`
export const MenuMobile = styled.div`
display: flex;
height: 50px;
justify-content: space-between;
align-items: center;

`
export default () => { };
