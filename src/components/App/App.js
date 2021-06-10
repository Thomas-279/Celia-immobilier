import { Header } from '../Header/Header'
import { Counter } from '../Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="md:container md:mx-auto">
      <Header />
      <Counter />
    </div>
  );
}

export default App;
