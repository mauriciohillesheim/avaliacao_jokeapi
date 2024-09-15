import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import JokeApi from './pages/JokeApi'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Api from './pages/Api'

function App() {
  return (
    <> 
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Joke-Api' element={<JokeApi />} />
        <Route path='/Api' element={<Api />}/>
      </Routes>
      <Footer/>
    </> 
  )
}

export default App
