import "./TagButtonStyle.css"
import Btn from "./Buttons"
export default function SideMenu(){
    return (
        <div style={{margin:"25px", border:"solid teal 5px"}}>

            <Btn> 
                <p>جديدة</p> 
                <p>icons</p>
            </Btn>

            <Btn> 
                <p>الاكثر قراءة</p> 
                <img alt="ًصورة"/>
            </Btn>

            <Btn> 
                <p>جديدة</p> 
                <p>icons</p>
               <img alt="ًصورة"/>
            </Btn>


        </div>
    )
}



