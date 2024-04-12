import './Button.css'


const Button = ({setModal, img}) => {
    return(
        <>
        <div className="div-but">
        <p>loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
        <button onClick={() => setModal(true)}><img src={img} alt="" /></button>
        </div>
        </>
    )
}

export default Button;