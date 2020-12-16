import { Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import GameDetails from './components/GamesDetails/GameDetails';
import GameList from './components/GameList/GameList';
import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header title='Games List' />
      <Switch>
        <Route exact path='/' component={GameList} />
        <Route path='/games/:id' component={GameDetails} /> 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
