import React from 'react'
import Estilos from '../styles/Home.module.css'
import Destaque from '../components/Destaque'
import Postagem from '../components/Postagem'


function CorpoDaPag() {
    return (
      
      <div >
         <Destaque/>

         <Postagem Titulo="Resumo" Imagem={"/InfoIcon.png"} 
          Texto= "Tenho 25 anos, atualmente moro em São Paulo capital, mas sempre aberto a novas experiências em outros lugares 
          (um de meus objetivos é futuramente trabalhar no exterior). Tenho facilidade em aprender e gosto por ensinar, já tive a oportunidade de 
          dar aulas e foi pessoalmente bem recompensador. Sou movido por novos desafios e competições saudáveis, durante meus estudos e atuação 
          descobri minha preferência pela área da eletrônica, principalmente quando se trata do desenvolvimento de PCB, mas ainda tenho muito o 
          que aprender." />
      
         <Postagem Titulo="Proposta do Site" Imagem={"/Programar.png"} 
          Texto="Desenvolver um projeto prático para auxiliar em meus estudos independentes de programação Web com o objetivo de aprender HTML, 
          CSS e ReactJS aplicando no framework NextJS." />
      

      
      </div>

      

    )
}

export default CorpoDaPag






/* import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
 */