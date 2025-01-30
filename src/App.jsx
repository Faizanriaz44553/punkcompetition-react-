import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import RoutesJson from './routes/RoutesJson'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        {
          RoutesJson.map(({path,element} , index)=>{
            return (
                <Route key={index} path={path} element={element}/>
            )
          })
        }
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
