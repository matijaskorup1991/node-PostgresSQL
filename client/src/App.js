import React from "react";
import { BrowserRouter, Switch, Router } from "react-router-dom";
import Home from "./routes/Home";
import RestaurantDetailsPage from "./routes/RestaurantDetailsPage";
import UpdatePage from "./routes/UpdatePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/restaurants/:id/update' component={UpdatePage} />
          <Route
            exact
            path='/restaurants/:id'
            component={RestaurantDetailsPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
