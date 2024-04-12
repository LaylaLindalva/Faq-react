import React from "react"
import ButtonModal from "../ButtonModal/ButtonModal"
import Modal from "../Modal/Modal"
// exporta as imagens

const ContainerModal = ({textButton, textModal}) => {
    const[modal, setModal] = React.useState(false)
    
    return(
        <>
        <ButtonModal 
        text={textButton}
        setModal={setModal} 
        modal={modal}
        img={modal ? img2 : img3}
         />
        <Modal 
        text={textModal} 
        modal={modal} />
        </>
    )
}

export default ContainerModal;