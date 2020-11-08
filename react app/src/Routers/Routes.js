import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Annotate from '../Components/annotate/annotate';

export const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Annotate} /> 
        
        
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;
  