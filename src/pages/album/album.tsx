import {
  IonContent, IonPage,
} from "@ionic/react";
import ExploreContainer from "components/ExploreContainer";
import "./album.scss";

const Home: React.FC = () => <IonPage>
  <IonContent fullscreen>
    <ExploreContainer />
  </IonContent>
</IonPage>;
export default Home;
