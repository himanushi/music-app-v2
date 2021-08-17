import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Album from "pages/album/album";
import Albums from "pages/albums/albums";
import {
  Redirect, Route,
} from "react-router";

const Routing: React.FC = () => <IonReactRouter>
  <IonRouterOutlet>
    <Route exact path="/albums" render={(props) => <Albums {...props} />} />
    <Route path="/albums/:id" render={(props) => <Album {...props} />} />
    <Route exact path="/">
      <Redirect to="/albums" />
    </Route>
  </IonRouterOutlet>
</IonReactRouter>;
export default Routing;
