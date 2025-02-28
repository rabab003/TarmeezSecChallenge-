import './App.css';
import Header from './Header';
import Posts from './Posts';

function App() {

  return (
    <>

    <div className='main'>
      <Header/>


      {/* posts & side menu container*/}

      <div>


      {/* posts container */}
      <div style={{width:'60%'}}>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>

      </div>
      {/* posts container */}

      <div>

      </div>



      </div>

      {/* posts & side menu container*/}




    </div>

    </>
  )
}

export default App
