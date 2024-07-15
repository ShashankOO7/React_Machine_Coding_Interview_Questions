import "./styles.css";
import CounterApp from "./CounterApp";
import CarouselApp from "./CarouselApp";
import ListSwap from "./ListSwap"

export default function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>React Machine Code Interview Questions</h1>
      <div>
        <h3>CounterApp</h3>
        <CounterApp />
        <h3>CarouselApp</h3>
        <CarouselApp />
        <h3>ListSwap</h3>
        <ListSwap />
      </div>
    </div>
  );
}
