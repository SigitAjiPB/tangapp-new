const Button = (props) => {
    const { 
        children,
        variant, 
        onClick = ()=> {}, 
        type="button", 
    } = props

    return (
        <button 
        className={`h-10 px-6 font-semibold rounded-lg ${variant}`}
        type={type}
        >
            {children}
        </button>
    )
}

export default Button