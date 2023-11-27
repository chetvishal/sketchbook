import Menu from '@/components/Menu'
import Toolbox from '@/components/Toolbox'
import Board from '@/components/Board'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>sketchbook</title>
      </Head>
      <Menu />
      <Toolbox />
      <Board />
    </>
  )
}
