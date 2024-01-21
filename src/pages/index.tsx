import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfólio da Júlia</title>
      </Head>
      <main>
        <div className='h-screen bg-secondary flex justify-center items-center flex-col gap-5 '>
          <div className='w-36 h-36 rounded-full bg-dark flex justify-center items-center'>
            <Image
              src='/eu.jpg'
              alt='Icone'
              width={100}
              height={80}
              priority
            />
          </div>
          <div className='flex flex-col justify-center items-center gap-3 text-white'>
            <p className='text-3xl'>Júlia Fazenda Ruiz</p>
            <p>Desenvolvedora Web</p>
          </div>
        </div>
        <div>Sobre</div>
        <div>Experiência</div>
        <div>Projetos</div>
      </main>
    </>
  )
}

export default Home
