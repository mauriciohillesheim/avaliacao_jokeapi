import './styles.css'

export default function Card (jokes) {
    return (
        <>
        {jokes.setup === jokes.delivery ? jokes.setup : jokes.setup + ' ' + jokes.delivery}
        
        </>
    )
}