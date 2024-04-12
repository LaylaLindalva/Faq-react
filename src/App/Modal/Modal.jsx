


const Modal = ({modal, setModal, img}) => {
    if(modal === true){
    return(
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ut hic, omnis, quibusdam quos odit, provident quisquam ex illum quod molestiae commodi fugiat accusantium esse ratione cumque reprehenderit! Commodi, distinctio.
            <button onClick={() => setModal(false)}>
            <img src={img} alt="" />
            </button>
        </div>
    )
} else {
    return null
}
}

export default Modal;