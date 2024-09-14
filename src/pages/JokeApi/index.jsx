import { useEffect, useState } from 'react';
import './styles.css';
import Piada from '../../components/Piada';

export default function JokeApi() {
    const [ conteudo, setConteudo ] = useState(<>Carregando...</>);

    async function carregarPiadas() {
        const reqOptions = {
            method: "GET",
            redirect: "follow",
        };

        const response = await fetch(
            'https://v2.jokeapi.dev/joke/Programming/',
            reqOptions
        );

        if(!response.ok){
            throw new Error('Erro de requisição Http! Error Status: ${response.status}');
        }

        const data = await response.json();
        return data.results;        
        // return apiResponse;
    }

    async function listaPiadas() {
        const piadas = await carregarPiadas();
        // console.log(piadas);
        return piadas.map((piada) => (
            <Piada key={piada.id} data={piada} /> ));
    }

    useEffect(() => {
        async function getConteudo() {
            setConteudo(await listaPiadas());
        }

        getConteudo();
    }, []);

    return (
        <div>
            <h1>Lista Piadas</h1>
            <div className='lista-piadas'>
                { conteudo }
        </div>
    </div>
    );   
}