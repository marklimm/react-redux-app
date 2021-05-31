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

        <div className='flex justify-center'>
          <div
            className='grid grid-cols-12 gap-14 m-8'
            style={{ maxWidth: '1200px' }}
          >
            {/* use the <Provider /> HOC to allow the Producer, FoodStand and Consumer access to the redux FoodStandStore */}
            <Provider store={FoodStandStore}>
              <div className='col-span-3'>
                <Producer />
              </div>
              <div className='col-span-6'>
                <FoodStand />
              </div>
              <div className='col-span-3'>
                <Consumer />
              </div>
            </Provider>
          </div>
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
