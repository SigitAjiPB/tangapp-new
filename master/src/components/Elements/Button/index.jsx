const Button = (props) => {
    const { 
        children,
        variant, 
        onClick = ()=> {}, 
        type="button", 
    } = props

    return (
        <button 
        className={`${variant}`}
        type={type}
        onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button