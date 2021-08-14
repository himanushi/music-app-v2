import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "components/ExploreContainer";
import "./album.scss";

const Home: React.FC = () => <IonPage>
  <IonContent fullscreen>
    <IonHeader collapse="condense">
      <IonToolbar>
        <IonTitle size="large">Blank</IonTitle>
      </IonToolbar>
    </IonHeader>
    <ExploreContainer />
  </IonContent>
</IonPage>;
export default Home;
