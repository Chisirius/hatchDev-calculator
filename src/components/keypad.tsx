import Button from "./button"

interface digitProps{
    onDigit:(digit:string)=>void
}

function Keypad({onDigit}:digitProps){
    const digits=["7",
    "8", "9","/",
    "4", "5","6", "*",
    "1", "2", "3","-", 
    "0",".","+",]

    return(
        <div>
            {digits.map((dig)=>(
            <Button 
            key={dig} 
            label={dig} 
            onDigit={onDigit}
            id={dig}/> 
            
            ))}

           
        </div>
    )
}

export default Keypad