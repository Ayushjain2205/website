import "./App.css";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className='App'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Entropy Labs")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Entropy Labs")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Entropy Labs")
            .start();
        }}
      />
      <div>
        <h6>By Ishika Pareek and Ayush Jain</h6>
      </div>
    </div>
  );
}

export default App;
