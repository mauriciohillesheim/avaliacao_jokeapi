//App.jsx
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import JokeApi from './pages/JokeApi'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <> 
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Joke-Api' element={<JokeApi />} />
      </Routes>
      <Footer/>
    </> 
  )
}

export default App
