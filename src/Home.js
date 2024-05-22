import React from 'react'
import App from './App'
import{Routes,Route} from 'react-router-dom'
import { Desc} from './comp/desc/Desc'
// import NBar from './comp/navv/NBar'


const Home = () => {
  return (
    <div>
        {/* <NBar/> */}
        <Routes>
            <Route exact path='/'  element={<App/>}/>
            <Route  path='/movie/:id' element={<Desc/>}/>
        </Routes>
    </div>
  );
}

export default Home