import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import Options from './components/Options';

function App() {
  return (
    <div className="app">
      <Header />
      <Options />
      <div className='app__cards'>
          <Cards />
      </div>
    </div>
  );
}

export default App;
