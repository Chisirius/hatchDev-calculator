import { useState } from "react"
import "./calculator.css"
import Display from "./display"
import Keypad from "./keypad"

function Calculator(){
    const [input, setInput]= useState("")

    const handleDigit=(digit:string)=>{
        setInput((prev)=> prev+ " " + digit + " ")
    }

    return(
        <div className="calc">
            <Display text={input}/>
            <Keypad onDigit ={handleDigit}/>
        </div>
    )
}

export default Calculator