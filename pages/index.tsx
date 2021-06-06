import React, { FunctionComponent } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Provider } from 'react-redux'

import { Consumer } from 'components/Consumer/Consumer'
import { FoodStand } from 'components/FoodStand/FoodStand'
import { Producer } from 'components/Producer/Producer'

import FoodStandStore from 'redux/FoodStandStore'

import { getMarkdownFileData } from 'lib/markdownParser'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import styles from './index.module.scss'

interface HomePageProps {
  readmeContent: string
}

//  styling the toastr taking cues from https://fkhadra.github.io/react-toastify/how-to-style#css-classes-as-function
const contextClass = {
  success: 'bg-green-600',
  error: 'bg-red-700',
  info: 'bg-gray-500',
  // warning: "bg-orange-400",
  default: 'bg-indigo-600',
  // dark: "bg-white-600 font-gray-300",
}

const HomePage: FunctionComponent<HomePageProps> = ({
  readmeContent,
}: HomePageProps) => {
  return (
    <>
      <Head>
        <title>React-redux demo website</title>
        <meta name='description' content='A demo react-redux website'></meta>
      </Head>

      <div className='mt-32 flex justify-center '>
        <div className={`flex ${styles.whiteBlock}`}>
          {/* use the <Provider /> HOC to allow the Producer, FoodStand and Consumer access to the redux FoodStandStore */}
          <Provider store={FoodStandStore}>
            <div className='pr-4'>
              <Producer />
            </div>
            <div style={{ width: '650px' }}>
              <FoodStand />
            </div>
            <div className='pl-4'>
              <Consumer />
            </div>
          </Provider>
        </div>
      </div>

      <div className='flex justify-center'>
        <div
          className={`${styles.markdownContent} ${styles.whiteBlock}`}
          dangerouslySetInnerHTML={{ __html: readmeContent }}
        />
      </div>

      {/* CSS classes taken from https://fkhadra.github.io/react-toastify/how-to-style#css-classes-as-function */}
      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar={true}
        style={{ width: '600px' }}
        toastClassName={({ type }) =>
          contextClass[type || 'default'] +
          ' relative flex mt-3 p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'
        }
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const readmeData = await getMarkdownFileData(
    '',
    'pages/landing-page-intro.md'
  )

  return {
    props: {
      readmeContent: readmeData.contentHtml,
    },
  }
}

export default HomePage
