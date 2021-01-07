import PropTypes from 'prop-types';
import Button from "./Button"

const Functions = ({onContentClear, onDelete}) => {

    return (
        <section className="functions">
            <Button text="Clear" type="button-long-text" clickHandler={onContentClear} />
            <Button text="&larr;" clickHandler={onDelete} />
        </section>
    )
}

export default Functions;

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}