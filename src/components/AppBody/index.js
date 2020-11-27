import React from "react";
import {
  Route,
  HashRouter,
  Switch
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from '../Pages/Home';


//Generic Landing Pages
import GenericLanding from '../Pages/Templates/GenericLanding';
import GenericTemplate1 from '../Pages/Templates/GenericTemplate1';


const history = createBrowserHistory();

const AppBody = () => {
return (
  <HashRouter>
        <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/GenericLanding" component={GenericLanding} exact/>
         <Route path="/GenericTemplate1" component={GenericTemplate1} exact/>
       </Switch>
  </HashRouter>  
  );
}
export default AppBody;