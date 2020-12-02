import React from "react";
import {
  Route,
  HashRouter,
  Switch
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from '../Pages/Home';
import FAQ from '../Pages/FAQ';
import Forms from '../Pages/Forms';
import Plans from '../Pages/Plans';
import LandingL2 from '../Pages/LandingL2';


import NewsAnnouncement from '../Pages/NewsAnnouncement';
import NewsAnnouncementJS from '../Pages/NewsAnnouncementJS';
import PlansLanding from '../Pages/PlansLanding';

//Article pages
import ArticleLanding from '../Pages/Templates/ArticleLanding';
import ArticleDetail1 from '../Pages/Templates/ArticleDetail1';
import ArticleDetail2 from '../Pages/Templates/ArticleDetail2';
import ArticleDetail3 from '../Pages/Templates/ArticleDetail3';

//Generic Landing Pages
import GenericLanding from '../Pages/Templates/GenericLanding';
import GenericTemplate1 from '../Pages/Templates/GenericTemplate1';
import GenericTemplate2 from '../Pages/Templates/GenericTemplate2';
import GenericTemplate3 from '../Pages/Templates/GenericTemplate3';
import GenericTemplate4 from '../Pages/Templates/GenericTemplate4';
import GenericTemplate5 from '../Pages/Templates/GenericTemplate5';
import GenericTemplate6 from '../Pages/Templates/GenericTemplate6';
import GenericTemplate7 from '../Pages/Templates/GenericTemplate7';

const history = createBrowserHistory();

const AppBody = () => {
return (
  <HashRouter>
        <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/FAQ" component={FAQ} exact/>
         <Route path="/Forms" component={Forms} exact/>
         <Route path="/Plans" component={Plans} exact/>
         <Route path="/LandingL2" component={LandingL2} exact/>
         <Route path="/PlansLanding" component={PlansLanding} exact/>
         <Route path="/NewsAnnouncement" component={NewsAnnouncement} exact/>
         <Route path="/NewsAnnouncementJS" component={NewsAnnouncementJS} exact/>
         <Route path="/ArticleLanding" component={ArticleLanding} exact/>
         <Route path="/ArticleDetail1" component={ArticleDetail1} exact/>
         <Route path="/ArticleDetail2" component={ArticleDetail2} exact/>
         <Route path="/ArticleDetail3" component={ArticleDetail3} exact/>
         <Route path="/GenericLanding" component={GenericLanding} exact/>
         <Route path="/GenericTemplate1" component={GenericTemplate1} exact/>
         <Route path="/GenericTemplate2" component={GenericTemplate2} exact/>
         <Route path="/GenericTemplate3" component={GenericTemplate3} exact/>
         <Route path="/GenericTemplate4" component={GenericTemplate4} exact/>
         <Route path="/GenericTemplate5" component={GenericTemplate5} exact/>
         <Route path="/GenericTemplate6" component={GenericTemplate6} exact/>
         <Route path="/GenericTemplate7" component={GenericTemplate7} exact/>

       </Switch>
  </HashRouter>  
  );
}
export default AppBody;