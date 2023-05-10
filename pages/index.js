import styles from '@/styles/Home.module.css'
// import { Inter } from 'next/font/google'
import HomeScreen from '@/pages/home'
import Head from 'next/head'
// const inter = Inter( { subsets: ['latin'] } )

export default function Home() {
  return (
    <>
      <Head >
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
      </Head>
      <main className={styles.main}>
        <HomeScreen />
      </main>
    </>
  )
}
