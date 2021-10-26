import react from "react";

export default function Saludar() {
    
    const saludar =() =>{
        alert("hola soy victor perea") 
    }

    
    return(
        <div>
            <button onClick={saludar}>Clicqueame</button>
        </div>

    )
}