import "./TagButtonStyle.css"

export default function SideMenu(){
    return (
        <div style={{margin:"25px", border:"solid teal 5px"}}>
            <Btn/>
            <Btn/>
            <Btn/>
            <Btn/>
            <Btn/>
            <Btn/>
            <Btn/>
            <Btn/>
            <Btn/>
            <Btn/>
            <Btn/>
            <Btn/>
            <Btn/>
            <Btn/>
            <Btn/>
            <Btn/>

        </div>
    )
}



function Btn(){
    return(
        <button className="tagButton">click me</button>
    )
}