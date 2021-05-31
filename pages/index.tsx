import React, { FunctionComponent } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Provider } from 'react-redux'

import { Consumer } from 'components/Consumer/Consumer'
import { FoodStand } from 'components/FoodStand/FoodStand'
import { Producer } from 'components/Producer/Producer'

import FoodStandStore from 'redux/FoodStandStore'

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

      <div className=''>
        <div className={`${styles.thisDiv}`}>
          {name}

          <Link href='/devblog'>
            <a className={styles.link}>Developer Blog</a>
          </Link>
        </div>

        <div className='grid grid-cols-12 mt-8'>
          {/* use the <Provider /> HOC to allow the Producer, FoodStand and Consumer access to the redux FoodStandStore */}
          <Provider store={FoodStandStore}>
            <div className='col-span-2'>
              <Producer />
            </div>
            <div className='col-span-8'>
              <FoodStand />
            </div>
            <div className='col-span-2'>
              <Consumer />
            </div>
          </Provider>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      name: 'Welcome to my react-redux website!  ',
    },
  }
}

export default HomePage
