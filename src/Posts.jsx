import { Children } from "react"

export default function Posts({title, content, children}){

    return(
        <div style={{
            padding:'20px',
            border:"solid teal 5px",
            margin:"25px",
            textAlign:"center",
        }}>
            <p>{children}</p>  
            <h2>{title}</h2>
            <hr style={{
                margin:"15px"
            }} />
            <p>{content}</p>

        </div>
    )

}