import React from 'react'
import {Link} from 'react-router-dom'
import './Erreur.css'
function Error() {

    return(
        <section className="error_page">
            <h1 className="error_title">404</h1>
            <h2 className="error_subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            <Link title='Accueil' to='/' className="error_link">Retourner sur la page d'accueil</Link>
        </section>
  )
}

export default Error