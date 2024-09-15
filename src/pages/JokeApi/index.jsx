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
      amount: 7,
      jokes: [
        {
          category: 'Programming',
          type: 'twopart',
          setup: 'Por que o programador foi ao terapeuta?',
          delivery: 'Porque ele não conseguia lidar com exceções.',
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
          category: 'Programming',
          type: 'twopart',
          setup: 'Qual é a tecla favorita dos programadores?',
          delivery: 'A tecla F5, porque ela sempre atualiza as coisas.',
          flags: {
            nsfw: false,
            religious: false,
            political: false,
            racist: false,
            sexist: false,
            explicit: false,
          },
          safe: true,
          id: 1,
          lang: 'pt',
        },
        {
          category: 'Programming',
          type: 'twopart',
          setup: 'Por que os desenvolvedores preferem o escuro?',
          delivery: 'Porque a luz atrapalha os bugs saírem.',
          flags: {
            nsfw: false,
            religious: false,
            political: false,
            racist: false,
            sexist: false,
            explicit: false,
          },
          safe: true,
          id: 2,
          lang: 'pt',
        },
        {
          category: 'Programming',
          type: 'twopart',
          setup: 'Como você chama um programador que não gosta de bugs?',
          delivery: 'Um exterminador de loops!',
          flags: {
            nsfw: false,
            religious: false,
            political: false,
            racist: false,
            sexist: false,
            explicit: false,
          },
          safe: true,
          id: 3,
          lang: 'pt',
        },
        {
          category: 'Programming',
          type: 'twopart',
          setup: 'O que um código mal escrito disse ao outro?',
          delivery: 'Eu sinto que estamos prestes a nos quebrar!',
          flags: {
            nsfw: false,
            religious: false,
            political: false,
            racist: false,
            sexist: false,
            explicit: false,
          },
          safe: true,
          id: 4,
          lang: 'pt',
        },
        {
          category: 'Programming',
          type: 'twopart',
          setup: 'Por que os programadores odeiam o verão?',
          delivery: 'Porque o calor causa muitos problemas de cache.',
          flags: {
            nsfw: false,
            religious: false,
            political: false,
            racist: false,
            sexist: false,
            explicit: false,
          },
          safe: true,
          id: 5,
          lang: 'pt',
        },
        {
          category: 'Programming',
          type: 'twopart',
          setup: 'Como os programadores resolvem problemas difíceis?',
          delivery: 'Dividem em problemas menores até que o problema desapareça.',
          flags: {
            nsfw: false,
            religious: false,
            political: false,
            racist: false,
            sexist: false,
            explicit: false,
          },
          safe: true,
          id: 6,
          lang: 'pt',
        }
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
