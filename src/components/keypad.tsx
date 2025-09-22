import Button from "./button"

interface digitProps{
    onDigit:(digit:string)=>void
    onHandleClear:()=>void
    onHandleBackspace:()=>void
    onHandleCalculate:()=>void
}

function Keypad({onDigit, onHandleClear, onHandleBackspace, onHandleCalculate}:digitProps){
    const digits=[
    "7","8", "9", "C", 
    "4", "5","6",  "/",
    "1", "2", "3", "*",
    "%", "0",  "-", "+",
    "AC", ".", "**", "=", ]

    return(
        <div>
            {digits.map((dig)=>(
            <Button 
            key={dig} 
            label={dig} 
            onDigit={onDigit}
            id={dig}
            onHandleClear={onHandleClear}
            onHandleBackspace={onHandleBackspace}
            onHandleCalculate={onHandleCalculate}
            /> 
            ))}

           
        </div>
    )
}

export default Keypad