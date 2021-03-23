import React from 'react'
import Estilos from '../styles/Home.module.css'
import Link from 'next/link'


function Cabecario() {
    return (

        <header className={Estilos.Menu}>

                <div className={Estilos.MenuItens}> <Link href="/">         Inicio    </Link> </div>  
                <div className={Estilos.MenuItens}> <Link href="/sobre">    Sobre     </Link> </div>  
                <div className={Estilos.MenuItens}> <Link href="/projetos"> Projetos  </Link> </div>  
                <div className={Estilos.MenuItens}> <Link href="/contatos"> Contatos  </Link> </div>  

        </header>

    )
}

export default Cabecario