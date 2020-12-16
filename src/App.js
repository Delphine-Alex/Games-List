import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Gamelist from './components/GameList/GameList';

function App() {
  return (
    <div className="App">
      <Header title='Games List' />
      <Gamelist />
      <Footer />
    </div>
  );
}

export default App;
