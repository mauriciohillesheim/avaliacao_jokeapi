import './styles.css'
export default function Api() {
    return (
        <div className='ApiPage'>
            <h1>API de Piadas</h1>
            <h3>A API de Piadas é uma interface que permite a desenvolvedores acessarem uma coleção de piadas de forma automatizada e prática.</h3>
            <h3>Veja como ela funciona:</h3>
            <ul>
                <li>O desenvolvedor faz uma requisição para a API com um pedido de piada.</li>
                <li>A API responde com uma piada, em texto ou formato JSON (um formato de dados estruturados).</li>
            </ul>
            <div className='image-container'>
                <img width="500" height="372"
                src="https://64.media.tumblr.com/c5bdc542320f43e7b45da6a2a7173919/tumblr_inline_pk5w5tC2Ar1sf8exp_500.gifv" 
                alt="Gif de uma piada"/>
            </div>
        </div>
    )
}
