import { useEffect, useState } from 'react'
import './styles.css'
import Card from '../../components/Card'

export default function JokeApi() {
    const [ conteudo, setConteudo ] = useState(<>Carregando...</>)

    async function getCharacters() {
        const reqOptions = {
            method: "GET",
            redirect: "follow"
        }

        const response = await fetch(
            " https://v2.jokeapi.dev/categories",
            reqOptions
        )

        if(!response.ok){
            throw new Error("Http Error")
        }

        const apiResponse = await response.json()

        return apiResponse
    }

    async function buildCards() {
        const consulta = await getCharacters()
        
        return consulta.results.map(categoria => <Card data={categoria} />)
    }

    useEffect(() => {
        async function getConteudo() {
            setConteudo(await buildCards())
        }

        getConteudo()
    }, [])

    return (
        <div className='list-api'>
            { conteudo }
        </div>
    )   
}