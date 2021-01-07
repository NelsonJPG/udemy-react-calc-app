
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({type, text, clickHandler }) => (
    // console.log("clic")  // burbujeo de funciones se ejecuta prinero clic y luego la funcion de orden superior (clickHandler)
    <button className={type} onClick={ () => clickHandler(text)}>
        <span>{text}</span>
    </button>
)

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button;