import React from 'react';
import './styles.css'

function Header({children}){
    //Desestruturação de objetos {}
    return (
        <header>
            <h1>{children}</h1>
        </header>
    )
}

export default Header;