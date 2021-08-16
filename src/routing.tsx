import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Albums from "pages/albums/albums";
import {
  Redirect, Route,
} from "react-router";

const Routing: React.FC = () => <IonReactRouter>
  <IonRouterOutlet>
    <Route path="/albums" component={Albums} />
    <Route exact path="/">
      <Redirect to="/albums" />
    </Route>
  </IonRouterOutlet>
</IonReactRouter>;
export default Routing;
