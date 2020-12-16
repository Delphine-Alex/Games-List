import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GameList from './components/GameList/GameList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header title='Games List' />
      <Switch>
        <Route path='/' component={GameList} />
        {/* <Route path='/games:id' component={GameDetails} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
