import iconEstrela from '../../../images/icon-star.svg'
import './Titulo.css'

const TituloModal = ({title}) => {
    return(
        <>
        <div className='titulo'>
        <img src={iconEstrela} alt="" />
        <h1>{title}</h1>
        </div>
        </>
    )
}

export default TituloModal;