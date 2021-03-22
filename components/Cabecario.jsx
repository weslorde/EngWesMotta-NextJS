import Link from 'next/link'
import React from 'react'
import Estilos from '../styles/Home.module.css'


function Cabecario() {
    return (

        <div className={Estilos.Menu}>
            <div className={Estilos.MenuItensIni}> </div> 
            <div className={Estilos.MenuItens}> <Link href="/">         Inicio    </Link> </div>  
            <div className={Estilos.MenuItens}> <Link href="/sobre">    Sobre     </Link> </div>  
            <div className={Estilos.MenuItens}> <Link href="/projetos"> Projetos  </Link> </div>  
            <div className={Estilos.MenuItens}> <Link href="/contatos"> Contatos  </Link> </div>  
            
        </div>

    )
}

export default Cabecario