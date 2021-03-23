import React from 'react'
import Estilos from '../styles/Home.module.css'

function  Destaque(props) {
    return (

    <div className={Estilos.DestaqueBox}>
        <div className={Estilos.DestaqueEu}>
            <img src="/Eusemfundo.png" />
        </div>

        <div className={Estilos.DestaqueLamp}>
            <img src="/Lampada.png" />
        </div>

        <div className={Estilos.DestaqueTxt}>
           <h1>Wesley Motta</h1>  
                <p>Estudante de engenharia elétrica,<br/> técnico em mecatrônica e <br/>apaixonado por tecnologia </p>
        </div>


    </div>

    )
}

export default Destaque