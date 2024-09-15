import { Link } from 'react-router-dom'
import './styles.css'
export default function Header() {
    return (
        <header className='cabecalho'>

            <h1>Joke API</h1>
            <nav>
                <ol>
                    <Link to="/" ><li>Home</li></Link>
                    <Link to="/api"><li>Api</li></Link>
                    <Link to="/about"><li>Sobre</li></Link>
                    <Link to="/piadas"><li>Piadas</li></Link>
                </ol>
            </nav>
        </header>
    )
}   