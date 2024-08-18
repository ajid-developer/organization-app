const Button = (props) => {
    const {classname, children, size = "h-10 px-6", onClick = () => {}, type="button"} = props; 

    return (
        <button type={type} className={`${size} font-semibold rounded-md ${classname} text-white`}
        onClick={() => onClick()}>
            {children}
        </button>
    );
};

export default Button;