import React, { FC } from 'react'
import './Button.css';


export type ButtonClickHandler = (text:string) => void // no hay salida de funcion por eso se coloca void

type Props = {
    type?: string,
    text: string,
    clickHandler: ButtonClickHandler
}

const Button: FC<Props> = ({type, text, clickHandler }) => (
    // console.log("clic")  // burbujeo de funciones se ejecuta prinero clic y luego la funcion de orden superior (clickHandler)
    <button className={type} onClick={ () => clickHandler(text)}>
        <span>{text}</span>
    </button>
)

export default Button;