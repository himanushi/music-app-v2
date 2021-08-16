import {
  IonContent, IonPage,
} from "@ionic/react";
import Footer from "pages/app/footer";
import Header from "pages/app/header";
import "./albums.scss";

const Albums: React.FC = () => <IonPage>
  <Header />
  <IonContent className="ion-padding" fullscreen>
      albums
  </IonContent>
  <Footer />
</IonPage>;
export default Albums;
