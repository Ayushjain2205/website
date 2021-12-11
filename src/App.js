import "./App.css";
import Entropy from "./Assets/entropy.mp4";

function App() {
  return (
    <div className='App'>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
        }}
      >
        <source src={Entropy} type='video/mp4' />
      </video>
    </div>
  );
}

export default App;
