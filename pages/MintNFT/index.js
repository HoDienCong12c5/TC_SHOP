import { URI_NFT_CHAIN, modalConfig } from '@/common/constant'
import ButtonBasic from '@/Components/ButtonBasic'
import MyInput from '@/Components/MyInput'
import useUserData from '@/Hook/useUserData'
import FirebaseService from '@/Services/FirebaseService'
import IPFSService from '@/Services/IPFSService'
import { getBase64Img, validateAddress } from '@/Utils/function'
import Web3Service from '@/Utils/web3'
import { Form, Upload } from 'antd'
import { useEffect, useState } from 'react'
import {useWorkModal}from'@/Hook/useModal'
import { ColCustom, ContainerImgMintNFT, ContainerMintNFT, ItemForm, PreImg, RowCustom, SelectCoursers, SelectOption } from './styled'
import useCallBackReject from '@/Hook/useCallBackReject'
import ModalTx from '@/Components/ModalTx'
import { useSelector } from 'react-redux'
const listCoursers = [
  {
    title:'Basic Blackchain',
    key:'basic_blockchain'
  },
  {
    title:'Basic React',
    key:'basic_react'
  }
]
const MintNFT = () => {
  const [form] = Form.useForm()
  const { userAddress } = useUserData()
  const {showModal, hideModal} = useWorkModal()
  const {callbackRejected} = useCallBackReject()
  const message = useSelector(state => state.locale.messages)

  const [courser, setCourser] = useState('basic_blockchain');
  const [formData, setFormData] = useState({
    addressStudent: '',
    nameStudent: ''
  })
  const [nftPreview, setNftPreview] = useState({
    images: '',
    pathIPFS: ''
  })

  const [addressContract, setAddressContract] = useState('')
  useEffect(() => {

    const getContract = async()=>{
      const bnbTestNet = '0xAe8841da103dA4830582c8857DDCCf306005DE93'
      const ethTestnet = '0xf795e0863F565557d738230031AE114138BEDAdD'
      const chainId = await Web3Service.getNetwork()
      switch (chainId) {
      case 97:
        setAddressContract(bnbTestNet)
        break;
      case 5:
        setAddressContract(ethTestnet)
        break;
      default:
        break;
      }
    }
    getContract()
    console.log('====================================');
    console.log({URI_NFT_CHAIN});
    console.log({URI_NFT_CHAIN});
    console.log('====================================');
  }, [userAddress]);

  const checkAddress = (rule, address) => {
    if (!validateAddress(address) || address === userAddress) {
      return Promise.reject('error address')
    }
  }
  const insertFirebase = async (hash,nonce,pathIPFS) => {
    const dataTx = {
      nameStudent: formData.nameStudent.toLowerCase(),
      image: pathIPFS
    }
    const chainId = await Web3Service.getNetwork()
    let data = {
      time: Date.now(),
      form: userAddress.toLowerCase(),
      to: formData.addressStudent.toLowerCase(),
      data: JSON.stringify(dataTx),
      hash: hash,
      title: courser,
      tokenId:nonce.toString(),
      chainId:chainId.toString()
    }
    FirebaseService.storeCrossTech.addData(data)
  }
  const mintNFT = async(pathIPFS)=>{
    let styleModal = modalConfig
    const noneUser = await Web3Service.getNonce(userAddress)
    const callbackBeforeDone = ()=>{
      styleModal.clickESCClose = false
      styleModal.showIconClose = false
      styleModal.clickOverClose = false
      showModal({
        body:<ModalTx
          title={message.confirm.mintNFT.start}
          des={message.confirm.mintNFT.start_des}
        />,
        modalConfig:styleModal
      })
    }
    const callbackAfterDone = (hash)=>{
      let styleModal = modalConfig
      styleModal.clickESCClose = true
      styleModal.showIconClose = true
      styleModal.clickOverClose = true
      showModal({
        body:<ModalTx
          title={message.confirm.mintNFT.success}
          des={message.confirm.mintNFT.success_des}
          onSubmit={hideModal}
        />,
        modalConfig:modalConfig
      })

    }
    const txHash = await Web3Service.mintNFT(
      formData.addressStudent,
      userAddress,
      addressContract,
      noneUser,
      callbackBeforeDone,
      callbackAfterDone,
      callbackRejected
    )

    if(txHash.startsWith('0x')){
      insertFirebase(txHash,noneUser,pathIPFS)
    }
  }
  const handleSubmitMint = async () => {
    if(addressContract !== ''){
      let styleModal = modalConfig
      styleModal.clickESCClose = false
      styleModal.showIconClose = false
      styleModal.clickOverClose = false
      showModal({
        body:<ModalTx
          title={message.confirm.mintNFT.confirm}
          des={message.confirm.mintNFT.confirm_des}
        />,
        modalConfig:modalConfig
      })
      const path = await IPFSService.uploadFile(nftPreview.pathIPFS)
      // const path = 'QmYMNa5Bv4PUyYnSr84sw63S9AEmSN1Muf6UH7vVHYqrQz'
      console.log({ path });
      try {
        await mintNFT(path)
      } catch (error) {

      }
    }else{
      showModal({
        body:<ModalTx
          disableLoading
          title={'CHAIN not support'}
          des={'Web support chainId 97 (BNB testnet) and chainId 5 (goerli-ETH testnet)'}
        />,
        modalConfig:modalConfig
      })
    }
  }

  const handlePreview = async (file) => {
    const f = await getBase64Img(file)
    setNftPreview({ pathIPFS: file, images: f });
  }
  const changeCourser = (courser)=>{
    setCourser(courser)
  }
  return (
    <div className='container-basic'>
      <ContainerMintNFT>
        <ContainerImgMintNFT>
          <div style={{ width: '100%', height: '85%' }}>
            <PreImg src={nftPreview.images} />
          </div>
          <Upload
            showUploadList={false}
            accept='.png,.jpg,.jpeg,.gif,.svg'
            beforeUpload={handlePreview}
          // onChange={handleChangeImg}
          >{message.mintNFT.addNewImg}
          </Upload>
        </ContainerImgMintNFT>

        <ItemForm
          onFinish={handleSubmitMint}
          onFinishFailed={()=>alert('error')}
          name={'ratio'}
          rules={[{ validator: () => { } }]}
        >
          <RowCustom >
            <ColCustom span={10}>
              {message.mintNFT.coursers}
            </ColCustom>
            <ColCustom span={14}>
              <SelectCoursers
                onChange={(value) => changeCourser(value)}
                // suffixIcon={<img src={images.icArrowBold} />}
                // dropdownClassName='filter-select-dropdown'
                defaultValue={courser}
                value={courser}
              >
                {listCoursers.map((item)=>(
                  <SelectOption key={item} value={item.key}>
                    {item.title}
                  </SelectOption>
                ))}

              </SelectCoursers>
            </ColCustom>
          </RowCustom>
        </ItemForm>

        <Form
          form={form}
          initialValues={formData}
          onValuesChange={(changedValues, allValue) =>
            setFormData(allValue)
          }
        >
          <ItemForm
            style={{ width: '100%' }}
            name={'addressStudent'}
            rules={[{ validator: checkAddress }]}
          >
            <RowCustom>
              <ColCustom span={10}>
                {message.textPopular.address}
              </ColCustom>
              <ColCustom span={14}>
                <MyInput
                  className='input'
                  autoComplete='off'
                  iconRight={<div style={{ color: 'white' }}>%</div>}
                  placeholder={message.textPopular.address}
                />
              </ColCustom>
            </RowCustom>
          </ItemForm>

          <ItemForm
            style={{ width: '100%' }}
            name={'nameStudent'}
          >
            <RowCustom>
              <ColCustom span={10}>
                {message.mintNFT.student}
              </ColCustom>
              <ColCustom span={14}>
                <MyInput
                  className='input'
                  autoComplete='off'
                  iconRight={<div style={{ color: 'white' }}>%</div>}
                  placeholder={'Coursers'}
                  onKeyPress={(event) => {}}
                />
              </ColCustom>
            </RowCustom>
          </ItemForm>
        </Form>
        <div style={{ width: '100%', borderBottom: '1px solid black' }} />
        <ButtonBasic
          disabled={userAddress && !formData.nameStudent || userAddress && !formData.addressStudent}
          onClick={handleSubmitMint}
          className={'mt-20 mb-20'}>
          {message.mintNFT.mintNFT}
        </ButtonBasic>

      </ContainerMintNFT>


    </div>
  )
}
export default MintNFT
