import './styles.css'

export default function Piada({ data: Categoria }) {
    return (
        <>
            { Categoria.name }
            <img src={Categoria.image} alt="" />
        </>
    )
}