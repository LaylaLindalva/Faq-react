import './Container.css'

const Container = ({children}) => {
    return(
        <section className="section">
            {children}
        </section>
    )
}

export default Container;