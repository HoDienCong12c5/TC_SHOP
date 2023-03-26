import Head from 'next/head'
import React from 'react'

const SEOLP = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>Mlem Coffee</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no' />
      <link rel="icon" href={process.env.NEXT_PUBLIC_IMG_LOGO} />
      <meta name="description" content="Mlem Coffee sắc hương tây nguyên"/>


      <meta itemprop="name" content="Mlem Coffee"/>
      <meta itemprop="description" content="Mlem Coffee sắc hương tây nguyên"/>
      <meta itemprop="image" content={process.env.NEXT_PUBLIC_IMG_LOGO}/>

      <meta property="og:url" content="http://dev-star-token-client.w3w.app"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Mlem Coffee"/>
      <meta property="og:description" content="Mlem Coffee sắc hương tây nguyên"/>
      <meta property="og:image" content={process.env.NEXT_PUBLIC_IMG_LOGO}/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Mlem Coffee"/>
      <meta name="twitter:description" content="Mlem Coffee sắc hương tây nguyên"/>
      <meta name="twitter:image" content={process.env.NEXT_PUBLIC_IMG_LOGO} />

    </Head>
  )
}

export default SEOLP
