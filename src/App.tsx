import { AnimateSharedLayout } from 'framer-motion';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Brand } from './pages/Brand';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AnimateSharedLayout>
          <Route path="/" exact component={Home}></Route>
          <Route path="/brand/:brand" component={Brand}></Route>
        </AnimateSharedLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
