import FirebaseService from '@/Services/FirebaseService';
import { useEffect, useState } from 'react';

const NFT3D = () => {
  const [datRealTime, setDatRealTime] = useState([])
  useEffect(() => {
    FirebaseService.storeCrossTech.getAllDataRealTime(setDatRealTime)
  }, [])
  console.log('====================================');
  console.log({ datRealTime });
  console.log('====================================');
  const getBase64Img = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const onFileChange = async (event) => {
    let file = event.target.files[0]
    const getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          resolve(reader.result)
        }
        reader.onerror = (error) => reject(error)
      })
    }
    const base64 = await getBase64(file)
    const base64Script = base64.split('base64,')[1]
    console.log('====================================');
    console.log({ base64Script });
    console.log('====================================');
  }

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      NFT3D</div>
  )
}

export default NFT3D