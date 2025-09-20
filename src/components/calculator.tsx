import { useEffect, useState } from "react"
import "./calculator.css"
import Display from "./display"
import Keypad from "./keypad"

function Calculator(){
    const [input, setInput]= useState("")
    const [result, setResult] =useState("")

    const handleDigit=(digit:string)=>{
        setInput((prev)=> prev +  digit )
    }

    const handleClear=()=>{
        setInput("")
        setResult("")
    }

    const handleBackSpace=()=>{
        setInput(input.slice(0, -1))
        setResult("")
    }

    const handleCalculate=()=>{
        try{
            setResult(eval(input).toString())
        }catch(error){
            setResult("Error")
        }
    }

    useEffect(() => {
        const handleKeydown=(event: KeyboardEvent)=>{
            const {key} = event

            if(!isNaN(Number(key)) || ["/","*","+","-" ].includes(key)){
                handleDigit(key)
            }else if(key ==="Enter"|| key === "="){
                handleCalculate()
            }else if(key === "Backspace"){
                handleBackSpace()
            }else if(key === "Escape"){
                handleClear()
            }else if(key === "."){
                handleDigit(".")
            }
        };

            window.addEventListener("keydown", handleKeydown);

            return () =>{
                window.removeEventListener("keydown", handleKeydown)
            } 

        },  [])


    return(
        <div className="calc">
            <Display text={input} result={result}/>
            <Keypad 
            onDigit ={handleDigit} 
            onHandleClear={handleClear}  
            onHandleBackspace={handleBackSpace}
            onHandleCalculate={handleCalculate}
            />
            
        </div>
    )
}

export default Calculator