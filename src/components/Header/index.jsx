import './styles.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='cabecalho'>
            <h1>Bem vindo ao Universo Joke</h1>
            
            <nav>
                <ol>
                <Link to='/'>Home</Link>
                <Link to='/About'>Sobre</Link>
                <Link to='/JokeApi'>Categorias</Link>
                </ol>
            </nav>
        </header>
    )
}