import Head from 'next/head';
import React from 'react'

type Props = {
  title: string;
}

const Header = (props: Props) => {
  const {title} = props;
  return (
    <Head>
    <title>{title}</title>
    <meta name="description" content="Network social Waroom" />
    <link rel="icon" href="/LogoWaroom.ico" />
  </Head>
  )
}

export default Header