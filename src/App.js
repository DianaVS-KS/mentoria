import { Switch, Route } from 'react-router-dom';
import Image from './pages/image';
import Button from './pages/button';
import Modal from './pages/modal';
import Home from './pages/home';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/button">
        <Button />
      </Route>
      <Route exact path="/image">
        <Image />
      </Route>
      <Route exact path="/modal">
        <Modal />
      </Route>
    </Switch>
  );
}

export default App;
