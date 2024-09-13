import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './componets/Header'
import Footer from './componets/Footer'
import Home from './pages/Home'
import About from './pages/About'
import JokeApi from './pages/JokeApi'
 
export default function App() {
  return (
    <> 
    <Header />
    <Routes> 

    <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/ joke-Api' element={<JokeApi />} />

    </Routes>
    <Footer/>
       </> 
    )
}
