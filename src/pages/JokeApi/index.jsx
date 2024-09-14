import { useEffect, useState } from 'react'
import './styles.css'
import Piada from '../../components/Piada'

export default function JokeApi() {
    const [ conteudo, setConteudo ] = useState(<>Carregando...</>)

    async function getCharacters() {
        const reqOptions = {
            method: "GET",
            redirect: "follow"
        }

        const response = await fetch(
            " https://v2.jokeapi.dev/character",
            reqOptions
        )

        if(!response.ok){
            throw new Error("Http Error")
        }

        const apiResponse = await response.json()

        return apiResponse
    }

    async function buildPiadas() {
        const consulta = await getCharacters()
        console.log(consulta);
        return consulta.results.map(categoria => <Piada key={categoria.id} data={categoria} />)
    }

    useEffect(() => {
        async function getConteudo() {
            setConteudo(await buildPiadas())
        }

        getConteudo()
    }, [])

    return (
        <div className='list-api'>
            { conteudo }
        </div>
    )   
}