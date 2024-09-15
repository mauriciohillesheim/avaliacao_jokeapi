import './styles.css'

export default function Home() {
    return (
        <div className='home-page'>
            <h3>Venha você também descobrir o universo do Joke</h3>
            <span>Para continuar, explore nossos conteúdos e descubra mais sobre 
                o universo de Joke!</span>
            <div>
            <img 
                    width="500" 
                    height="350" 
                    src="https://media.giphy.com/media/3oEjHLzm4BCF8zfPyw/giphy.gif" 
                    alt="Gif divertido sobre APIs e piadas"
                />
            </div>
        </div>
    )
}