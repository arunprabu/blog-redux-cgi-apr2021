import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>

        <div className="mt-5">
          {/* Configure the routes */}
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/posts' component={Posts} />
            <Route path='/about' component={About} />
            {/*  TODO: Learn about 404 */}
          </Switch>
        </div>
        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
