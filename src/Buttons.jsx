import { Children } from "react"

export default function Btn({ children}){
    return(
        
        <button className="tagButton"> 
            <p>{children}</p> 
        </button>
    )
}