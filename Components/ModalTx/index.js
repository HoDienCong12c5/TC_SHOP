import React from 'react'
import styled from 'styled-components';
import { MediumText, NormalText, TitleText } from '../TextSize';
import ButtonBasic from '../ButtonBasic';
import Loading from '../MyLoading'
const ContainerModalTx = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
align-content: center;
align-content: center;
text-align: center;
`;

const ModalTx = ({
  title,
  des,
  onSubmit = null,
  titleBtn = 'OK',
  disableLoading = false
}) => {
  return (
    <ContainerModalTx>
      <MediumText textTransform className='mb-10' fontWeight='bold'>
        {title}
      </MediumText>
      <NormalText>
        {des}
      </NormalText>
      {
        !onSubmit && !disableLoading && (<div style={{position:'relative',width:'100%'}} className='mt-10 mb-30'>
          <Loading width={'auto'}/>
        </div>)
      }

      {
        onSubmit && (
          <ButtonBasic onClick={onSubmit} className='mt-10'>
            {titleBtn}
          </ButtonBasic>
        )
      }
    </ContainerModalTx>
  )
}

export default ModalTx
