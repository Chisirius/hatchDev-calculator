import "./display.css"
interface DisplayProps{
    text:string
}

function Display({text}:DisplayProps){
    return(
        <div className="display">
            <div className="display-content">
            {text|| "0"}
            </div>
            
        </div>
    )
}

export default Display