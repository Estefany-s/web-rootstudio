import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../src/pages/home';
import Studio from '../src/pages/studio';
import Work from '../src/pages/work';
import Notes from '../src/pages/notes';
import Contact from '../src/pages/contact';
import WeAreHiring from '../src/pages/weAreHiring';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/studio" component={Studio}/>
        <Route exact path="/work" component={Work}/>
        <Route exact path="/notes" component={Notes}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/we-are-hiring" component={WeAreHiring}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
