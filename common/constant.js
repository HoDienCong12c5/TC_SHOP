export const BSC_RPC = {
  56: {
    rpcUrls: ['https://bsc-dataseed.binance.org'],
    chainId: '0x38',
    chainName: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
      name: 'Binance',
      symbol: 'BNB',
      decimals: 18
    },
    blockExplorerUrls: ['https://bscscan.com']
  },
  97: {
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
    chainId: '0x61',
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'Binance',
      symbol: 'BNB_T',
      decimals: 18
    },
    blockExplorerUrls: ['https://testnet.bscscan.com']
  },
  5:{
    rpcUrls: ['https://rpc.ankr.com/eth_goerli'],
    chainId: '0x5',
    chainName: 'Ethereum (Goerli) Testnet',
    nativeCurrency: {
      name: 'Ethereum (Goerli) ',
      symbol: 'ETH_T',
      decimals: 18
    },
    blockExplorerUrls: ['https://goerli.etherscan.io/']
  }
}
export const ETH_RPC = {
  1: {
    rpcUrls: ['https://bsc-dataseed.binance.org'],
    chainId: '0x31',
    chainName: 'Ethereum Chain Mainnet',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18
    },
    blockExplorerUrls: ['https://bscscan.com']
  },
  '0x4e454153': {
    rpcUrls: ['https://testnet.aurora.dev'],
    chainId: '0x61',
    chainName: 'Ethereum Chain Testnet',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH_T',
      decimals: 18
    },
    blockExplorerUrls: ['https://testnet.bscscan.com']
  }
}
export const REQUEST_TYPE = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
}

export const REACT_QUERY = {
  GET_ALL_NFT:'GET_ALL_NFT',
  GET_ALL_MY_NFT:'GET_ALL_MY_NFT',
  GET_ACCOUNT:'GET_ACCOUNT',
  GET_ALL_PRODUCT:'GET_ALL_PRODUCT',
  GET_CONTACT:'GET_CONTACT',
  GET_TOKEN:'GET_TOKEN',
  GET_FILTER_COFFEE:'GET_FILTER_COFFEE',
  GET_FILTER_NFT:'GET_FILTER_NFT',
  GET_ALL_ORDER:'GET_ALL_ORDER',
  GET_ALL_COFFEE:'GET_ALL_COFFEE',
  GET_ALL_POD:'GET_ALL_POD',
  GET_ALL_CART:'GET_ALL_CART'
}
export const COOKIE = {
  TOKEN_USER:'TOKEN_USER',
  TOKEN_REFRESH:'TOKEN_USER',
  TOKEN_ACCESS:'TOKEN_ACCESS'
}

export const LOCALE_DATA = {
  JA: 'ja',
  CN: 'cn',
  EN: 'en'
}

export const CONNECTION_METHOD = {
  METAMASK: 'METAMASK',
  WALLET_CONNECT: 'WALLET_CONNECT',
  PANTOGRAPH: 'PANTOGRAPH'
}
export const modalConfig = {
  wrapClassName: '',
  width: 500,
  //click over modal to close
  clickOverClose:true,
  isDisableIcon: false,
  //show icon close modal
  showIconClose:true,
  maskStyle: {},
  title: null,
  footer: null,
  //click esc modal to close
  clickESCClose:true,
}
export const GlobalModal = {
  body: <></>,
  modalConfig:modalConfig
}
export const OBSERVER_KEY = {
  CHANGED_ACCOUNT:'CHANGED_ACCOUNT',
  LOGIN:'LOGIN'
}
export const dataFireBase = {
  'time': 0,
  'hash': '0',
  'to': '0',
  'from': '0',
  'title': '0',
  'contract': '0',
  'data': {
    'image': '0',
    'address': '0xbB47BDD15Aee646b66c03b8cCd1AD1C2AfE5d72c',
    'nameUser': '0',
    'title': '0'
  },
  'id': '0'
}
export const PAGE_SIGN = [
  '/Screen/MyProfile',
]
export const BG_BTN = {
  bgMain:'#45cacd',
  bgClose:'#AFB0B1',
  bgWarning:'#f67d91',
  bgBlue1:'#e4e8e6'
}
export const CHAIN_ID_SUPPORT = {
  '5':'0x1',
  '97':'0x61'
}
export const COLOR = {
  green1:'#66FF33',
  yellow:'yellow'
}

export const PAGE_NO_HEADER_FOOTER = [
  '/register',
  '/landing-page',
  '/login'
]

export const URI_NFT = process.env.NEXT_PUBLIC_URI_NFT
export const URI_NFT_CHAIN = process.env.NEXT_PUBLIC_URI_NFT_CHAIN
export const URL_NFT = process.env.NEXT_PUBLIC_IPFS

export default () => { }
