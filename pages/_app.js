import React from 'react'
import '../styles/globals.css'
import '../styles/Home.module.css'
import Cabecario from '../components/Cabecario'
import Rodape from '../components/Rodape'
import Estilos from '../styles/Home.module.css'



function MyApp({ Component, pageProps }) {
  return (
      
      <div>
        <Cabecario {...pageProps} />    
        <Component {...pageProps} />
        <Rodape {...pageProps} />
      </div>  
    );
}

export default MyApp

