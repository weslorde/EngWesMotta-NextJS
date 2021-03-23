import React from 'react'
import Estilos from '../styles/Home.module.css'
import Link from 'next/link'

function  Rodape(props) {
    return (

        <footer className={Estilos.Rodape}>
            
            <div>

                <div className={Estilos.RodapeRedes}><a>
                    <Link href="https://github.com/weslorde">
                        <img href="/" src="/GitIcon.png" alt=""/>
                    </Link>
                </a></div>
                
                <div className={Estilos.RodapeRedes}><a>
                    <Link href="https://www.facebook.com/EngWesMotta">
                        <img href="/" src="/FaceIcon.png" alt=""/>
                    </Link>
                </a></div>

                <div className={Estilos.RodapeRedes}><a>
                    <Link href="https://www.linkedin.com/in/wesmotta/">
                        <img href="/" src="/LinkedinIcon.png" alt=""/>
                    </Link>
                </a></div>


            </div>

            <p></p>
            <p>Projeto pessoal em desenvolvimento - 2021</p>
            
        </footer>

    )


}


export default Rodape