import React, { FunctionComponent } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import styles from './index.module.scss'

interface HomePageProps {
  name: string
}

const HomePage: FunctionComponent<HomePageProps> = ({
  name,
}: HomePageProps) => {
  return (
    <>
      <Head>
        <title>React-redux demo website</title>
        <meta name='description' content='A demo react-redux website'></meta>
      </Head>

      <div className='m-3'>
        <h1 className='ml-5 text-xl'>Welcome to my react-redux website!</h1>
        <div className={`${styles.thisDiv} mt-5`}>{name}</div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      name: 'stuff',
    },
  }
}

export default HomePage
