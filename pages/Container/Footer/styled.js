import { MediumText, TitleText } from '@/Components/TextSize'
import styled from 'styled-components'
const ContainerFooter = styled.div`
position: relative;
  margin-top: 50px !important;
  margin-bottom: 50px !important;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  max-width: 1450px;
    padding: 0 50px;
    width: 100%;
  @media screen and (max-width: 768px) {
    flex-flow: column wrap;
    gap:20px;
    margin-bottom:50px;
    /* align-items: center; */
  }
`

export const Left = styled.div`
  max-width: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`
export const About = styled(TitleText)`
  white-space: nowrap;
  font-size: 32px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const AboutDetails = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
  margin-bottom: 20px;
`
export const Des = styled(MediumText)`
  white-space: nowrap;
  cursor: ${(props) => props.isHover && 'pointer'};
  &.hasHover{
    &:hover{
      transform: scale(1.1);
    }
  }
`
export const DesAbout = styled(MediumText)`
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  flex-direction: row wrap;
  gap: 5px;
  max-width: 500px;
  align-items: end;
  font-weight: 500;
  &:hover{
      transform: scale(1.05);
    }
`
export const Right = styled.div`
  max-width: 48%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`
export const ContainerMoreLink = styled.div`
  display: flex;
  flex-flow: row;
  gap: 15px;
`
export const ListSocial = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`
export default ContainerFooter
