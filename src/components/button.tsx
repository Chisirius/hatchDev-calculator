interface buttonProps{
    label:string;
    onDigit:(value:string)=>void
    id:string
}

function Button({label, onDigit}:buttonProps){
    return(
        <button type="button" id={label} className="btn" onClick={()=>onDigit(label)}>
            {label}
        </button>
    )
}

export default Button