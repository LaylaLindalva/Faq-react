
import ContainerModal from '../Container/Container';
import './App.css'

const App = () => {

    

    return(
    <section className='container'>
       <ContainerModal textButton='botão 1' textModal='modal 1'/>
       <ContainerModal textButton='botão 2' textModal='modal 2'/>
       <ContainerModal textButton='botão 3' textModal='modal 3'/>
       <ContainerModal textButton='botão 4' textModal='modal 4'/>
    </section>
    )
}

export default App;