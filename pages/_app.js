import PageReduxAction from '@/Redux/Action/pageAction';
import { KEY_PAGE } from '@/Redux/Lib/constants';
import initState from '@/Redux/Lib/initState';
import { checkLocalStoreToRedux } from '@/Redux/Reducers';
import store from '@/Redux/Store/configureStore';
import '@/styles/globals.css';
import '@/styles/helper.scss';
import '@/styles/styleBasic.scss';
import ReduxService from '@/Utils/ReduxService';
import { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import Container from './Container/index'
import ReduxConnectIntl from '@/static/asset/lang'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import React from 'react';
import ThemeSC from '@/Components/ThemsSC';
import 'antd/dist/reset.css';
import 'aos/dist/aos.css'
import Web3Provider from './Container/Web3Provider';
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })


export default function App({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())
  useEffect(() => {
    ReduxService.setBnbBalance()
  }, []);
  useEffect(() => {
    const getDataLocal = async () => {
      const storageRedux = [
        { key: KEY_PAGE.SET_METAMASK_INFO, action: PageReduxAction.setMetamask, init: initState.metamaskRedux },
        { key: KEY_PAGE.CONNECTION_METHOD, action: PageReduxAction.setConnectionMethod, init: initState.connectionMethod },
        { key: KEY_PAGE.SET_USER_INFO, action: PageReduxAction.setUserInfo, init: initState.userInfo },
      ]
      const promiseArr = storageRedux.map((item) => {
        checkLocalStoreToRedux(store, item.key, item.action, item.init)
      })
      await Promise.all(promiseArr)
    }
    getDataLocal()
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {

    }, 1000)
    return () => { clearInterval(interval) }
  }, []);
  return (
    <ThemeSC>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Provider store={store} >
            <Web3Provider>
              <ReduxConnectIntl defaultLocale='en'>
                <Container >
                  <Component {...pageProps} />
                </Container>
              </ReduxConnectIntl>
            </Web3Provider>

          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </ThemeSC>



  )
  // return <Component {...pageProps} />
}
