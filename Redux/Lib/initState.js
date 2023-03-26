
const initState = {
  lang: 'ja',
  userData: null,
  userInfo: null,
  connectionMethod: null,
  metamaskRedux: {
    chainId: 0,
    accounts: [],
    address: ''
  },
  isSign: false,
  internet: true,
  balanceRedux: {
    balanceETH: 0
  },
  bnbPriceRedux: 0,
  openModal: {
    show: false
  }
}

export default initState