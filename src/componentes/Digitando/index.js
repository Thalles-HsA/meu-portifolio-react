import Typing from 'react-typing-animation';
import './Digitando.css'

const AnimatedTypingComponent = () => (
    
  <Typing  className="digitando" >
    Thalles Henrique

    <Typing.Speed ms={100} />
    <br />

    Front-end devel
    <Typing.Speed ms={50} />
    <Typing.Delay ms={2000} />
    <Typing.Backspace count={15} />

    Back-en
    <Typing.Delay ms={2000} />
    <Typing.Backspace count={7} />

    Full Stack Developer

    
  </Typing>
);

export default AnimatedTypingComponent