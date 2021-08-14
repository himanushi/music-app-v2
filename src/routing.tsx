import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "pages/albums/album";
import {
  Redirect, Route,
} from "react-router";

const Routing: React.FC = () => <IonReactRouter>
  <IonRouterOutlet>
    <Route exact path="/home">
      <Home />
    </Route>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
  </IonRouterOutlet>
</IonReactRouter>;
export default Routing;
