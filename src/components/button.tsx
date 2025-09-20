import "./button.css"

interface buttonProps{
    label:string;
    onDigit:(value:string)=>void
    id:string
    onHandleClear:()=> void
    onHandleBackspace:()=>void
    onHandleCalculate:()=>void
}

function Button({label, onDigit, onHandleClear, onHandleBackspace, onHandleCalculate}:buttonProps){
    return(
        <button type="button" id={label} className={label==="="?"equal":"btn"} onClick={()=>
        label==="AC"? onHandleClear() : label==="C" ? onHandleBackspace(): label==="="? onHandleCalculate(): onDigit(label)}>
            {label}
        </button>
    )
}

export default Button