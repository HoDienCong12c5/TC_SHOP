import { URI_NFT, URI_NFT_CHAIN } from '@/common/constant';
import { KEY_PAGE } from '@/Redux/Lib/constants';
import converter from 'hex2dec';
import Web3 from 'web3';
import { convertBalanceToWei, roundingNumber } from './function';
import ReduxService from './ReduxService';
class Web3Service{
  static createWeb3Provider (){
    let web3 = new Web3()
    if(ReduxService.getConnectionMethod() === KEY_PAGE.META_MASK){
      web3.setProvider(window.ethereum)
    }
    return web3
  }
  static async onSignMessage (address, nonce) {
    let currentWeb3 = null
    currentWeb3 = this.createWeb3Provider()
    return new Promise((resolve, reject) => {
      try {
        let noneFormat = currentWeb3.utils.fromUtf8(nonce)
        currentWeb3.eth.personal.sign(
          noneFormat,
          address,
          (err, signature) => {
            if (err) return reject(err)
            return resolve({ address, signature })
          }
        )
      } catch (e) {
        console.log('Sign message error', e)
        return resolve()
      }
    })
  }
  static async getNetwork () {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()

      if(web3.eth.currentProvider){
        web3.eth
          .getChainId()
          .then((network) => {
            resolve(network)
          })
          .catch((error) => {
            reject(error)
          })
      }else{
        resolve(-1)
      }

    })
  }
  static async enableMetaMask () {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()
      web3.currentProvider
        .enable()
        .then((accounts) => {
          resolve(accounts)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  static async getAccounts () {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()
      web3.eth
        .getAccounts()
        .then((accounts) => {
          resolve(accounts)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  static callGetDataWeb3 (contract, method, param) {
    // method.encodeABI
    const dataTx = contract.methods[method](...param).encodeABI()
    return dataTx
  }
  static async estimateGas (rawTransaction) {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()
      web3.eth.estimateGas(rawTransaction, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  static async postBaseSendTxs (from, arrSend, isNeedCovert = false) {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()
      web3.eth.getChainId(async (err, network) => {
        let chainId = '0x1'
        if (!err) {
          chainId = '0x' + network
        }

        const isTestnet = chainId === '0x4'
        const nonce = await this.getNonce(from)

        const promise = arrSend.map(async (item, index) => {
          return new Promise(async (resolve, reject) => {
            const {
              to,
              data,
              value,
              percent,
              gasPrice,
              extraRateGas = 1.1,
              callbackData,
              callbackFunc,
              callBeforeFunc,
              isCallBackErr,
              callbackErrFunc,
              additionalData
            } = item
            const newGasPrice = parseFloat(
              gasPrice
                ? convertBalanceToWei(gasPrice, 9)
                : await this.getGasPrice()
            )
            let rawTransaction = {
              nonce: nonce + index,
              to,
              from,
              gasPrice: newGasPrice || 250000000,
              data
            }

            if (!isTestnet) {
              rawTransaction.chainId = chainId
            }

            if (percent) {
              rawTransaction.gasPrice = newGasPrice * percent
            }

            if (value) {
              rawTransaction.value = converter.decToHex(
                isNeedCovert ? convertBalanceToWei(value) : `${value}`
              )
            }
            this.estimateGas(rawTransaction)
              .then(async (gas) => {
                const gasFinal =
                  converter.decToHex(
                    roundingNumber(gas * extraRateGas, 0).toString()
                  ) || gas
                rawTransaction.gas = gasFinal
                rawTransaction.gasLimit = 300000
                web3.eth
                  .sendTransaction(rawTransaction)
                  .on('transactionHash', function (hash) {
                  // call before call next callBackData
                    if (callBeforeFunc && hash) {
                      callBeforeFunc && callBeforeFunc(hash)
                    }
                    resolve(hash)
                  })
                  .on('receipt', function (receipt) {
                    if (callbackData) {
                      setTimeout(() => {
                        Web3Service.postBaseSendTxs(from, callbackData)
                      }, 500)
                    }

                    if (callbackFunc) {
                      callbackFunc(receipt.transactionHash)
                    }
                  })
                  .on('error', function (error) {
                    console.error()
                    if (isCallBackErr) {
                      callbackErrFunc(error)
                    }
                    reject(error)
                  })
              })
              .catch((err) => {
                console.log('estimateGas - error')
                if (isCallBackErr) {
                  callbackErrFunc(err)
                }
                reject(err)
              })
          })
        })
        Promise.all(promise)
          .then((result) => {
            resolve(result)
          })
          .catch((err) => {
            console.log('postBaseSendTxs - error: ', err)
            reject(err)
          })
      })
    })
  }
  static async getGasPrice () {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()
      web3.eth.getGasPrice((err, res) => {
        if (err) {
          resolve(0)
        }
        resolve(res)
      })
    })
  }
  static async getNonce (address) {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()
      web3.eth.getTransactionCount(address, (err, res) => {
        if (err) {
          resolve(0)
        }
        resolve(res)
      })
    })
  }

  static async sendToken (
    from,
    to,
    value,
    callbackBeforeDone,
    callbackAfterDone,
    callbackRejected
  ){
    const data = {
      from: from,
      to: to,
      value: value,
      callBeforeFunc: callbackBeforeDone,
      callbackFunc: callbackAfterDone,
      callbackErrFunc: callbackRejected
    }
    return new Promise(async (resolve, reject) => {
      this.postBaseSendTxs(from, [data], true)
        .then((res) => {
          resolve(res[0])
        })
        .catch((err) => {
          callbackRejected(err)
          console.log('error: ', err)
          reject(err)
        })
    })

  }
  static async mintNFT (
    to,
    from,
    contractAddress,
    nonceUser,
    callbackBeforeDone,
    callbackAfterDone,
    callbackRejected
  ){
    const minABI = [{
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        { internalType: 'string', name: 'uri', type: 'string' },
      ],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    }]
    return new Promise(async (resolve, reject) => {
      const web3 = this.createWeb3Provider()
      const chainId = await this.getNetwork()
      const baseURI = `${URI_NFT_CHAIN}/${chainId}/${nonceUser}`
      console.log('====================================');
      console.log({baseURI});
      console.log('====================================');
      const contract = new web3.eth.Contract(minABI, contractAddress)
      const dataTx = this.callGetDataWeb3(contract, 'mint', [
        to,
        nonceUser,
        baseURI
      ])

      const data = {
        from: from,
        to: contractAddress,
        value: 0,
        data:dataTx,
        callBeforeFunc: callbackBeforeDone,
        callbackFunc: callbackAfterDone,
        // isCallBackErr:true,
        callbackErrFunc: callbackRejected
      }
      this.postBaseSendTxs(from, [data], true)
        .then((res) => {
          console.log('====================================');
          console.log({res});
          console.log('====================================');
          resolve(res[0])
        })
        .catch((err) => {
          callbackRejected(err)
          console.log('error: ', err)
          reject(err)
        })
    })
  }

}
export default Web3Service;
