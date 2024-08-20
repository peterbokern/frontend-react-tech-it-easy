
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ buttonText, onClickEvent }) => {
    return (
        <button type="button" className="filter-button" onClick={onClickEvent}>
            {buttonText}
        </button>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClickEvent: PropTypes.func.isRequired,
};

export default Button;
