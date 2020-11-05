import React from 'react'
import Head from 'next/head'

import Layout from '../components/layout'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Layout />
    </>
  )
}

export default Home
