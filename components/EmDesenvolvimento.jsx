import React from 'react'
import Estilos from '../styles/Home.module.css'


function EmDesenvolvimento(props) {
    return (
      
      <div className={Estilos.Desenv}>
        
          <h3>Página "{props.Pagina}"</h3>
          <h3>Em Desenvolvimento</h3>
         
      </div>
      

      

    )
}

export default EmDesenvolvimento