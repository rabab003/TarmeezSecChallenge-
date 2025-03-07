import './App.css';
import Header from './Header';
import Posts from './Posts';
import SideMenu from './SideMenu'

function App() {

  return (
    <>

    <div className='main'>
      <Header/>

      <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>

      {/* start posts & side menu container*/}

      <div style={{display:"flex", width:"60%"}}>


      {/* posts container */}
      <div style={{width:'60%'}}>
      <Posts title="اكاديمية ترميز" content="اكاديمية متخصصه لتعلم البرمجة بمختلف لغاتها و تقنياتها" >
        <h2>20</h2>
      </Posts>

      <Posts title="hello world" content="this is hello world article" />
      <Posts title="posts 3" content="this is the body of post 3" />
      </div>

      {/* posts container */}
      <div style={{width:'40%'}}>
      <SideMenu/>
   
      </div>
      </div>

      </div>
    </div>

    </>
  )
}

export default App
