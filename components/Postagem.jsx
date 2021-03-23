import React from 'react'
import Estilos from '../styles/Home.module.css'
import Link from 'next/link'




function Postagem(props) {
    return (

    <div className={Estilos.GradePostagem}> 
        <div className={Estilos.PostagemTitulo}>
            <h2>{props.Titulo}</h2>    
        </div>

        <div className={Estilos.PostagemConteudo}>
            <img src={props.Imagem} /> 
            <p>{props.Texto}</p>   
        </div>
    </div>
    )
}

export default Postagem