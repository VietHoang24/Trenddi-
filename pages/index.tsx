import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// @ts-ignore
export const getServerSideProps = async ({req, res}) => {
    const cookie = req.cookies;
    if (!cookie || !cookie.token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }
    return {
        props: { token: cookie.token },
    }
}
const Home: NextPage<{token: string}> = ({token}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trendii</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://trendii.com/">Trendii</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
