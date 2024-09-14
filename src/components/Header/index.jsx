import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
    return (
        <header className='piada'>
            <h1>Universo Joke</h1>
            <nav>
                <ol>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>Sobre</li>
                    </Link>
                    <Link to="/joke-Api">
                        <li>Categoria</li>
                    </Link>
                </ol>
            </nav>
        </header>
    )
}