import React from 'react';
import './contenedor.scss'

export const Contenedor = ( {children} ) => {


    return (
            <div className='conteiner'>
                {children}
            </div>
        )
};

