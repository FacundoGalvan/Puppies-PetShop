import './boton.scss'

export const Boton = ( {children, click} ) => {
    return (
        <button className='my-button'onClick={click}>{children}</button>
    )
}
