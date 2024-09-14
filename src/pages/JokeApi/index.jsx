import { useEffect, useState } from 'react'
import './styles.css'
import Card from '../../components/Card'

export default function JokeApi() {
  const [conteudo, setConteudo] = useState(<>Carregando...</>)

  // Função mockada para simular a resposta da API
  async function getJokes() {
    // Aqui você pode simular a resposta da API diretamente
    const mockResponse = {
      error: false,
      amount: 2,
      jokes: [
        {
          category: 'Misc',
          type: 'twopart',
          setup: 'O que é um cheiro verde?',
          delivery: 'Peido do Hulk.',
          flags: {
            nsfw: false,
            religious: false,
            political: false,
            racist: false,
            sexist: false,
            explicit: false,
          },
          safe: true,
          id: 0,
          lang: 'pt',
        },
        {
          category: 'Misc',
          type: 'twopart',
          setup: 'O que o pagodeiro foi fazer na igreja?',
          delivery: 'Cantar pá God.',
          flags: {
            nsfw: false,
            religious: true,
            political: false,
            racist: false,
            sexist: false,
            explicit: false,
          },
          safe: false,
          id: 1,
          lang: 'pt',
        },
      ],
    }

    // Simula o atraso de uma requisição real
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockResponse)
      }, 1000) // Simulando 1 segundo de atraso
    })
  }

  async function buildCards() {
    const consulta = await getJokes()
    // Criando os cards com os dados mockados
    return consulta.jokes.map(joke => <Card data={joke} key={joke.id} />)
  }

  useEffect(() => {
    async function getConteudo() {
      setConteudo(await buildCards())
    }
    getConteudo()
  }, [])

  return (
    <>
      <div className='list-api'>
        {conteudo}
      </div>
    </>
  )
}