import Typewriter from "typewriter-effect";

<Typewriter
  onInit={(typewriter) => {
    typewriter.pauseFor(2500).deleteAll().start();
  }}
/>;

export default Typewriter;