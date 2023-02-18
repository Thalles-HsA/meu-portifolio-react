import Typist from 'react-typist-component';
import './Digitando.css'
import Emoji from "react-emoji-render";


function AnimatedTypingComponent () {
  return (
    <div className="digitando">
      <Typist typingDelay={50} >
        <p>
          Thalles Henrique,
        </p>
      </Typist>
      <Typist startDelay={2500} typingDelay={120} backspaceDelay={30}>
        <p>
          Front-end Devel<Emoji text="🤔" onlyEmojiClassName="make-emojis-large" />
        </p>
        <Typist.Delay ms={1500} />
        <Typist.Backspace count={18} />
        <p>
          Back-end De<Emoji text="🤔" onlyEmojiClassName="make-emojis-large" />
        </p>
        <Typist.Delay ms={1500} />
        <Typist.Backspace count={15} />
          Full Stack Developer
      </Typist>
    </div>
  )
};

export default AnimatedTypingComponent