import "./display.css"
interface DisplayProps{
    text:string
    result:string
}

function Display({text, result}:DisplayProps){
    return(
        <div className="display">
            <div className="display-content">
            {text|| "0"}
            </div>
            <div className="displayResult">
            {result}
            </div>
            
        </div>
    )
}

export default Display