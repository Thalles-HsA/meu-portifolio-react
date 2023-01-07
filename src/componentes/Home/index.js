import AnimatedTypingComponent from '../Digitando'
import './Home.css'

const Home = () => {

    return (
        <div className='home'>
            <p>Olá, eu sou o </p>

            <AnimatedTypingComponent />
            
            <p>Seja bem-vindo(a) ao meu portifólio website</p>
           
        </div>
    )

}

export default Home