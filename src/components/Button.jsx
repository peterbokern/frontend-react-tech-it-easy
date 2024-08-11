import  '../styles/Button.css';

const Button = ({buttonText}) => {
    return (
        <button type="button" className="filter-button" onClick={() => console.log({buttonText})}>
            {buttonText}
        </button>
    );
};

export default Button;