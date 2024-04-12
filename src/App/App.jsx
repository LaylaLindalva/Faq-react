import Container from "./Container/Container"
import TituloModal from "./TituloModal/Titulo"
import './App.css'
import React from 'react'
import Button from "./Button/Button"
import Img from '../../images/icon-plus.svg'
import Img2 from '../../images/icon-minus.svg'
import Modal from "./Modal/Modal"


const App = () => {

    const [modal, setModal] = React.useState(false)

    return(
        <>
        <Container>
            <TituloModal title={"FAQs"}/>
            <Button setModal={setModal}
            img={Img}
            />
            <Modal modal={modal} setModal={setModal} img={Img2}/>
        </Container>
        </>
    )
}

export default App;