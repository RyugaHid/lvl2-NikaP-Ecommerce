import './App.css';
import TopNav from './Components/TopNav';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import Main from "./Components/Main"
import { HOME, LIST, SINGLE} from "./Components/Roures";
import SingleProductPage from './Components/singleProductPage/SingleProductPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>


      
      <Router>
        <Switch>
          <Route path={SINGLE}>
            <SingleProductPage />
          </Route>
          <Route path={HOME}>
            <Main />
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;