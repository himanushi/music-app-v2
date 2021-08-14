import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "components/ExploreContainer";
import Header from "pages/header";
import "./Home.scss";

const Home: React.FC = () => <IonPage>
  <Header />
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
