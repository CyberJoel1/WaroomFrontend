import React from 'react'

type Props = {
    secret?:string;
}

export const EnvironmentLogin = ({secret}: Props) => {
    secret = process.env.SECRET_COOKIE;
    console.log(secret);
  return (
    <>

    </>
  )
}