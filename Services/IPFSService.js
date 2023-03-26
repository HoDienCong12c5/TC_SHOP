import { create as ipfsHttpClient } from 'ipfs-http-client';
class IPFSService{
  static createIPFS(){
    const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
    const projectSecretKey = process.env.NEXT_PUBLIC_PROJECT_SERET_KEY
    const authorization = 'Basic ' + btoa(projectId + ':' + projectSecretKey);
    console.log({projectId,projectSecretKey,authorization});

    const ipfs = ipfsHttpClient({
      url: 'https://ipfs.infura.io:5001/api/v0',
      headers: {
        authorization
      }
    })
    return ipfs
  }
  static async uploadFile(file){
    try {
      const ipfs = await this.createIPFS()
      console.log({ipfs});
      const result = await ipfs.add(file);
      return result?.path
    } catch (error) {
      console.log({error});
      return null
    }

  }
}
export default IPFSService;
